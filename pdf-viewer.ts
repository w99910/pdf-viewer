import * as pdfjsLib from "pdfjs-dist";
import * as pdfjsViewer from "pdfjs-dist/web/pdf_viewer";

// @ts-ignore
// import pdfjsWorkerUrl from 'pdfjs-dist/build/pdf.worker?url';
import "pdfjs-dist/web/pdf_viewer.css";
import Button from "./interfaces/Button";
// @ts-ignore
// import pdfjsSandboxUrl from "pdfjs-dist/build/pdf.sandbox?url";
import ViewThumbnailsButton from "./buttons/view-thumbnails-button";
import DownloadButton from "./buttons/download-button";
import SearchButton from "./buttons/search-button";
import ZoomButton from "./buttons/zoom-button";
import ViewPropertiesButton from "./buttons/view-properties-button";

type Data = {
    pdfDocument: pdfjsLib.PDFDocumentProxy,
    buttonsContainer: HTMLDivElement,
    pdfContainer: HTMLDivElement,
    mainContainer: HTMLDivElement,
    bodyContainer: HTMLDivElement,
    eventBus: pdfjsViewer.EventBus,
    pdfLinkService: pdfjsViewer.PDFLinkService,
    pdfFindController: pdfjsViewer.PDFFindController,
    pdfScriptingManager: pdfjsViewer.PDFScriptingManager,
    pdfViewer: pdfjsViewer.PDFViewer,
    url: string,
}

export {Data};

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker`;
export default class PDFViewer {
  protected pdfDocument: pdfjsLib.PDFDocumentProxy;

  protected buttons: Array<Button> = [
    new ViewThumbnailsButton(),
    new DownloadButton(),
    new SearchButton(),
    new ZoomButton(),
    new ViewPropertiesButton(),
  ];

  protected pdfContainer: HTMLDivElement;

  protected buttonsContainer: HTMLDivElement;

  protected bodyContainer: HTMLDivElement;

  protected eventBus: pdfjsViewer.EventBus;

  protected pdfLinkService: pdfjsViewer.PDFLinkService;

  protected pdfFindController: pdfjsViewer.PDFFindController;

  protected pdfScriptingManager: pdfjsViewer.PDFScriptingManager;

  protected pdfViewer: pdfjsViewer.PDFViewer;

  protected url: string;

  addButton(button: Button) {
    this.buttons.push(button);
    return this;
  }

  setButtons(buttons: Array<Button>) {
    this.buttons = buttons;
    return this;
  }

  get data(): Data {
    return {
      pdfDocument: this.pdfDocument,
      buttonsContainer: this.buttonsContainer,
      pdfContainer: this.pdfContainer,
      bodyContainer: this.bodyContainer,
      mainContainer: this.container,
      eventBus: this.eventBus,
      pdfLinkService: this.pdfLinkService,
      pdfFindController: this.pdfFindController,
      pdfScriptingManager: this.pdfScriptingManager,
      pdfViewer: this.pdfViewer,
      url: this.url,
    };
  }

  constructor(protected container: HTMLDivElement) {
    if (!container) throw new Error("Please specify valid container");
    this.buildContainers();
    this.initialisePDFService();
  }

  protected initialisePDFService() {
    this.eventBus = new pdfjsViewer.EventBus();

    this.pdfLinkService = new pdfjsViewer.PDFLinkService({
      eventBus: this.eventBus,
    });

    this.pdfScriptingManager = new pdfjsViewer.PDFScriptingManager({
      eventBus: this.eventBus,
      sandboxBundleSrc: `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.sandbox`,
    });

    // (Optionally) enable find controller.
    this.pdfFindController = new pdfjsViewer.PDFFindController({
      eventBus: this.eventBus,
      linkService: this.pdfLinkService,
    });

    // Creating the page view with default parameters.
    this.pdfViewer = new pdfjsViewer.PDFViewer({
      container: this.pdfContainer,
      eventBus: this.eventBus,
      linkService: this.pdfLinkService,
      findController: this.pdfFindController,
      scriptingManager: this.pdfScriptingManager,
    });

    this.pdfViewer.l10n.getLanguage = async () => "my";

    this.pdfLinkService.setViewer(this.pdfViewer);
    this.pdfScriptingManager.setViewer(this.pdfViewer);
  }

  protected buildContainers() {
    this.container.classList.add(
      "w-screen",
      "h-screen",
      "p-2",
      "top-0",
      "left-0",
      "fixed",
      "z-100",
      "flex",
      "bg-[rgba(0,0,0,0.3)]"
    );
    // prepare buttons container
    let box = document.createElement("div");
    box.className = "flex flex-col w-full";
    this.buttonsContainer = document.createElement("div");
    this.buttonsContainer.className =
      "w-full grid grid-cols-3 gap-x-2 rounded items-center border shadow-lg p-1 bg-white";
    let leftSection = document.createElement("div");
    leftSection.className = "flex items-center";
    let centerSection = document.createElement("div");
    centerSection.className = "flex justify-center items-center";
    let rightSection = document.createElement("div");
    rightSection.className = "flex justify-end items-center";
    this.buttonsContainer.append(leftSection);
    this.buttonsContainer.append(centerSection);
    this.buttonsContainer.append(rightSection);
    box.append(this.buttonsContainer);

    // prepare canvas element
    this.bodyContainer = document.createElement("div");
    this.bodyContainer.className =
      "w-full h-full mt-2 relative overflow-y-auto flex justify-center";
    this.bodyContainer.style.scrollBehavior = "smooth";
    this.pdfContainer = document.createElement("div");
    this.pdfContainer.style.position = "absolute";
    this.pdfContainer.style.width = "100%";
    // this.div.className = "h-full";
    let viewer = document.createElement("div");
    viewer.id = "viewer";
    viewer.className = "pdfViewer";
    this.pdfContainer.append(viewer);

    this.bodyContainer.append(this.pdfContainer);
    box.append(this.bodyContainer);

    this.container.append(box);
  }

  protected buildButtons() {
    this.buttons.forEach((button) => {
      button.reset();
      let buttonElement = button.build(this.data);

      if (!buttonElement) {
        return;
      }

      switch (button.position()) {
        case "left":
          this.buttonsContainer.children[0].append(buttonElement);
          break;
        case "center":
          this.buttonsContainer.children[1].append(buttonElement);
          break;
        case "right":
          this.buttonsContainer.children[2].append(buttonElement);
          break;
      }

      buttonElement.onclick = () => button.onClick(this.data);
    });
  }

  protected listenEvents() {
    this.eventBus.on("pagesinit", (s) => {
      // We can use pdfSinglePageViewer now, e.g. let's change default scale.
      this.pdfViewer.currentScaleValue = "auto";

      // We can try searching for things.
    });
  }

  async init(url: string, options: Object = {}) {
    let cMapUrl = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/cmaps/`;
    this.url = url;
    const loadingTask = pdfjsLib.getDocument({
      url: url,
      enableXfa: true,
      cMapPacked: true,
      disableAutoFetch: true,
      disableStream: true,
      disableFontFace: false,
      cMapUrl,
    });
    (async () => {
      this.pdfDocument = await loadingTask.promise;

      this.pdfViewer.setDocument(this.pdfDocument);

      this.pdfLinkService.setDocument(this.pdfDocument, null);

      this.listenEvents();
      this.buildButtons();
    })();
  }
}
