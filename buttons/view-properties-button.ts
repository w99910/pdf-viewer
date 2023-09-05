import Button from "../interfaces/Button";
import {Data} from "../pdf-viewer";
import {onClickOutside} from "js-utils";
import {getPdfFilenameFromUrl} from "pdfjs-dist";

export default class ViewPropertiesButton implements Button {
    protected btn: HTMLButtonElement;

    protected size: string;

    protected name: string;

    protected author: string;

    protected created: string;

    protected pdfProducer: string;

    protected pdfVersion: string;

    protected totalPages: string;

    protected popOver: HTMLElement;

    protected isVisible: boolean = false;

    build(data: Data): HTMLElement {
        let btn = document.createElement("button");
        btn.className =
            "outline-none border-none hover:bg-gray-100 p-2";
        btn.title = "view properties";
        btn.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';

        // prepare data
        data.pdfDocument.getMetadata().then((metaData) => {
            let info = metaData.info;
            this.name = getPdfFilenameFromUrl(data.url);
            this.computeFilesize(metaData.contentLength)
            this.computeCreatedDate(info['CreationDate']);
            this.author = info['Creator'];
            this.pdfProducer = info['Producer'];
            this.pdfVersion = info['PDFFormatVersion'];
            this.totalPages = data.pdfDocument.numPages.toString();
            this.preparePopover();
        });
        return btn;
    }

    protected preparePopover() {
        this.popOver = document.createElement('div');
        this.popOver.className = 'flex-col fixed gap-y-2 p-4 top-1/2 z-[10000] bg-gray-50 border-2 shadow-lg rounded-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2';
        this.popOver.style.display = 'none';
        let title = document.createElement('h1');
        title.className = 'font-semibold text-lg border-b py-2';
        title.innerText = 'Document Properties';
        this.popOver.append(title);
        Object.getOwnPropertyNames(this).forEach((property) => {
            if (typeof this[property] === 'string') {
                let div = document.createElement('div');
                div.className = 'flex items-center mt-2';
                let label = document.createElement('span');
                label.className = 'w-32';
                label.innerText = property;

                let value = document.createElement('p');
                value.className = 'w-64';
                value.innerText = this[property];

                div.append(label);
                div.append(value)
                this.popOver.append(div);
            }
        })
        document.body.append(this.popOver);
        onClickOutside(this.popOver, () => {
            if (this.isVisible) this.toggleVisibility();
        })
    }

    onClick(data: Data) {
        this.toggleVisibility();
    }

    computeFilesize(size) {
        if (size < 1000000) {
            // kb
            this.size = size / 1000 + 'kb';
        } else {
            // mb
            this.size = size / 1000000 + 'mb';
        }
    }

    computeCreatedDate(raw) {
        const dateTimeString = raw.substring(2, raw.length - 7);

// Extract the year, month, day, hour, minute, and second components
        const year = dateTimeString.substring(0, 4);
        const month = dateTimeString.substring(4, 6) - 1; // Months are 0-indexed (0-11)
        const day = dateTimeString.substring(6, 8);
        const hour = dateTimeString.substring(8, 10);
        const minute = dateTimeString.substring(10, 12);
        const second = dateTimeString.substring(12, 14);

// Create a Date object with the extracted components
        const date = new Date(Date.UTC(year, month, day, hour, minute, second));

// Extract the time zone offset
        const timeZoneOffsetString = raw.substring(raw.length - 7);
        const timeZoneOffsetHours = parseInt(timeZoneOffsetString.substring(1, 3), 10);
        const timeZoneOffsetMinutes = parseInt(timeZoneOffsetString.substring(4, 6), 10);

// Adjust the date for the time zone offset
        date.setUTCHours(date.getUTCHours() - timeZoneOffsetHours);
        date.setUTCMinutes(date.getUTCMinutes() - timeZoneOffsetMinutes);

        this.created = date.toDateString() + ' ' + date.toTimeString();
    }

    position(): string {
        return "right";
    }

    toggleVisibility() {
        setTimeout(() => {
            this.isVisible = !this.isVisible;
            this.popOver.style.display = this.isVisible ? 'flex' : 'none';
        }, 100)
    }

    reset() {
        this.isVisible = false;
        this.popOver?.remove();
        this.btn?.remove();
        this.size = null;
        this.name = null;
        this.author = null;
        this.created = null;
        this.pdfProducer = null;
        this.pdfVersion = null;
        this.numPages = null;
    }
}