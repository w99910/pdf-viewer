import {PDFDocumentProxy} from "pdfjs-dist";
import {Data} from "../pdf-viewer";

export default interface Button {
    build(data: Data): HTMLElement | null;

    onClick(data: Data);

    position(): string; // either left, center, right;

    reset();
}