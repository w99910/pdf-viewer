import {PDFDocumentProxy, PDFPageProxy} from "pdfjs-dist";
import Button from "../interfaces/Button";
import {Data} from "../pdf-viewer";

const MAX_NUM_SCALING_STEPS = 3;

export default class ViewThumbnailsButton implements Button {
    protected show: boolean = false;
    protected hasBuilt: boolean = false;
    protected thumbnailContainer: HTMLDivElement;
    protected btn: HTMLButtonElement;

    build(data: Data): HTMLButtonElement {
        // this.navigateContainer = document.createElement("div");
        // this.navigateContainer.className =
        //   "flex flex-col w-2/12 gap-y-4 bg-white";
        this.btn = document.createElement("button");
        this.btn.className = "outline-none border-none hover:bg-gray-100 p-2 text-gray-400";
        this.btn.title = 'view thumbnails';
        this.btn.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-layout-list"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><path d="M14 4h7"/><path d="M14 9h7"/><path d="M14 15h7"/><path d="M14 20h7"/></svg>';
        return this.btn;
    }

    async onClick(data: Data) {
        if (!this.hasBuilt) {
            this.prepareContainer(data.bodyContainer);
            await this._build(data);
            this.hasBuilt = true;
        }
        this.toggleShow();
    }

    toggleShow() {
        this.show = !this.show;
        this.thumbnailContainer.style.display = this.show ? "flex" : "none";
        this.btn.classList.toggle('text-gray-400');
    }

    position(): string {
        return 'left';
    }

    prepareContainer(parentElement: HTMLElement) {
        parentElement.style.position = "relative";
        parentElement.style.display = "flex";
        this.thumbnailContainer = document.createElement("div");
        // compute height;
        let boundingRectOfParent = parentElement.getBoundingClientRect();
        let bottomPadding = 10;
        let height = window.innerHeight - boundingRectOfParent.top - bottomPadding;
        this.thumbnailContainer.className =
            "gap-y-2 py-2 px-4 fixed w-44 bg-gray-50 z-10 rounded h-full flex flex-col overflow-y-auto left-2";
        // this.thumbnailContainer.style.width = '30rem';
        this.thumbnailContainer.style.height = height + 'px';
        this.thumbnailContainer.style.display = "none";
        parentElement.prepend(this.thumbnailContainer);
    }

    protected async _build(data: Data) {
        let numPages = data.pdfDocument.numPages;
        for (let i = 1; i <= numPages; i++) {
            let page = await data.pdfDocument.getPage(i);
            let img = await this.generateThumbnail(page);
            img.dataset.id = i.toString();
            img.title = 'Page ' + i;
            img.classList.add('cursor-pointer', 'border');
            img.addEventListener('click', () => {
                data.bodyContainer.scrollTop = parseFloat(img.dataset.offsetY!);
            });
            this.thumbnailContainer.append(img);
            let pageElement = data.pdfContainer.querySelector(`[data-page-number="${i}"]`);
            img.dataset.offsetY = pageElement?.getBoundingClientRect().top.toString();
        }
    }

    async generateThumbnail(page: PDFPageProxy): Promise<HTMLImageElement> {
        // create img
        let img = document.createElement("img");
        let canvas = await this.renderPage(page);
        img.src = canvas.toDataURL();
        return img;
    }

    async renderPage(page: PDFPageProxy): Promise<HTMLCanvasElement> {
        // create canvas
        let canvas = document.createElement("canvas");

        let context = canvas.getContext("2d");

        const viewport = page.getViewport({scale: 0.5});

        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = Math.floor(viewport.width) + "px";
        canvas.style.height = Math.floor(viewport.height) + "px";

        const renderContext = {
            canvasContext: context!,
            viewport,
        };

        await page.render(renderContext).promise;

        this._reduceImage(canvas);

        return canvas;
    }


    /**
     * @private
     */
    _reduceImage(canvas: HTMLCanvasElement) {
        // drawImage does an awful job of rescaling the image, doing it gradually.
        let reducedWidth = canvas.width << MAX_NUM_SCALING_STEPS;
        let reducedHeight = canvas.height << MAX_NUM_SCALING_STEPS;
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = reducedWidth;
        tempCanvas.height = reducedHeight;

        // Since this is a temporary canvas, we need to fill it with a white
        // background ourselves. `_getPageDrawContext` uses CSS rules for this.
        const ctx = tempCanvas.getContext("2d", {alpha: false})!;
        ctx.save();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fillRect(0, 0, reducedWidth, reducedHeight);
        ctx.restore();
        while (reducedWidth > canvas.width || reducedHeight > canvas.height) {
            reducedWidth >>= 1;
            reducedHeight >>= 1;
        }
        ctx.drawImage(
            canvas,
            0,
            0,
            canvas.width,
            canvas.height,
            0,
            0,
            reducedWidth,
            reducedHeight
        );
        while (reducedWidth > 2 * canvas.width) {
            ctx.drawImage(
                tempCanvas,
                0,
                0,
                reducedWidth,
                reducedHeight,
                0,
                0,
                reducedWidth >> 1,
                reducedHeight >> 1
            );
            reducedWidth >>= 1;
            reducedHeight >>= 1;
        }
        canvas.getContext('2d')!.drawImage(
            tempCanvas,
            0,
            0,
            reducedWidth,
            reducedHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );
        return canvas;
    }

    reset() {
        this.show = false;
        this.hasBuilt = false;
        this.thumbnailContainer?.remove();
        this.btn?.remove();
    }
}
