import Button from "../interfaces/Button";
import {Data} from "../pdf-viewer";
import {PDFDocumentProxy} from "pdfjs-dist";
import {EventBus, PDFViewer} from "pdfjs-dist/web/pdf_viewer";

// page-width, page-actual, page-height, page-fit, auto

export default class ZoomButton implements Button {

    protected pdfViewer: PDFViewer;

    protected currentScaleTracker: HTMLOptionElement;

    protected container: HTMLDivElement;

    build(data: Data): HTMLElement {
        this.pdfViewer = data.pdfViewer;
        this.container = document.createElement('div');
        this.buildButtons(this.container)
        this.buildDropdown(this.container);

        data.eventBus.on('scalechanging', (s) => {
            this.currentScaleTracker.innerText = Math.round(s.scale * 100) + '%';
            this.currentScaleTracker.selected = true;
        });

        return this.container;
    }

    onClick(data: Data) {

    }

    buildButtons(div: HTMLDivElement) {
        div.className = 'flex items-center gap-x-2 text-gray-600 fill-current';
        let zoomOutButton = document.createElement('button');
        zoomOutButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 lucide lucide-zoom-out"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/></svg>';
        zoomOutButton.addEventListener('click', () => {
            this.pdfViewer.decreaseScale();
        });
        div.append(zoomOutButton);

        let zoomInButton = document.createElement('button');
        zoomInButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-zoom-in"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>';
        zoomInButton.addEventListener('click', () => {
            this.pdfViewer.increaseScale();
        });
        div.append(zoomInButton);
    }

    buildDropdown(div) {
        let dropdown = document.createElement('select');
        this.currentScaleTracker = document.createElement('option');
        this.currentScaleTracker.disabled = true;
        dropdown.append(this.currentScaleTracker);
        let options = ['page-width', ' page-actual', 'page-height', 'page-fit', 'auto'];
        options.forEach((option) => {
            let optionEle = document.createElement('option');
            optionEle.value = option;
            optionEle.innerText = option;
            dropdown.append(optionEle);
        })
        dropdown.addEventListener('change', (e) => {
            this.pdfViewer.currentScaleValue = (e.target as HTMLSelectElement).value;
        })
        div.append(dropdown)
    }

    position(): string {
        return "center";
    }

    reset() {
        this.pdfViewer = null;
        this.container?.remove();
    }

}