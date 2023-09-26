import "./dist/style.css";

import PDFViewer from "./pdf-viewer";

let pdfViewer = new PDFViewer(document.getElementById("pdf"));

pdfViewer.init("/readme.pdf", {
  fullscreen: false,
});
