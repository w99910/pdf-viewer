import Button from "../interfaces/Button";
import {Data} from "../pdf-viewer";
import {DownloadManager} from "pdfjs-dist/web/pdf_viewer";
import {Position} from "postcss";

export default class DownloadButton implements Button {
    protected btn: HTMLButtonElement;

    build(data: Data): HTMLButtonElement {
        this.btn = document.createElement("button");
        this.btn.className =
            "outline-none border-none hover:bg-gray-100 p-2";
        this.btn.title = "download file";
        this.btn.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>';
        return this.btn;
    }

    onClick(data: Data) {
        let downloadManager = new DownloadManager();

        downloadManager.downloadUrl(data.url, '', '');
    }

    position() {
        return 'right';
    }

    reset() {
    }

}