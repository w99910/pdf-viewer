import Button from "../interfaces/Button";
import { Data } from "../pdf-viewer";
import { onClickOutside } from "js-utils";
import { getPdfFilenameFromUrl } from "pdfjs-dist";

export default class ViewPropertiesButton implements Button {
  protected btn: HTMLButtonElement;

  protected size: string | null;

  protected name: string | null;

  protected author: string | null;

  protected created: string | null;

  protected pdfProducer: string | null;

  protected pdfVersion: string | null;

  protected totalPages: string | null;

  protected popOverContainer: HTMLElement;

  protected isVisible: boolean = false;

  build(data: Data): HTMLElement {
    this.btn = document.createElement("button");
    this.btn.className = "outline-none border-none hover:bg-gray-100 p-2";
    this.btn.title = "view properties";
    this.btn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';

    // prepare data
    data.pdfDocument.getMetadata().then((metaData) => {
      let info = metaData.info;
      this.name = getPdfFilenameFromUrl(data.url);
      this.computeFilesize(metaData.contentLength);
      this.computeCreatedDate(info["CreationDate"]);
      this.author = info["Creator"];
      this.pdfProducer = info["Producer"];
      this.pdfVersion = info["PDFFormatVersion"];
      this.totalPages = data.pdfDocument.numPages.toString();
      this.preparePopover();
    });
    return this.btn;
  }

  protected preparePopover() {
    this.popOverContainer = document.createElement("div");
    this.popOverContainer.className = 'fixed flex z-[10000] items-center justify-center w-screen h-screen bg-[rgba(0,0,0,0.3)] top-0 left-0'
    const popover = document.createElement('div');
    popover.className =
      "flex-col fixed gap-y-2 p-4 top-1/2 bg-gray-50 border-2 shadow-lg rounded-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2";
    this.popOverContainer.style.display = "none";
    this.popOverContainer.appendChild(popover);
    let title = document.createElement("h1");
    title.className = "font-semibold text-lg border-b py-2";
    title.innerText = "Document Properties";
    popover.append(title);
    Object.getOwnPropertyNames(this).forEach((property) => {
      if (typeof this[property] === "string") {
        let div = document.createElement("div");
        div.className = "flex items-center mt-2";
        let label = document.createElement("span");
        label.className = "w-32";
        label.innerText = property;

        let value = document.createElement("p");
        value.className = "w-64";
        value.innerText = this[property];

        div.append(label);
        div.append(value);
        popover.append(div);
      }
    });
    document.body.append(this.popOverContainer);
    onClickOutside(popover, () => {
      if (this.isVisible) this.toggleVisibility();
    });
  }

  onClick(data: Data) {
    this.toggleVisibility();
  }

  computeFilesize(size) {
    if (size < 1000000) {
      // kb
      this.size = size / 1000 + "kb";
    } else {
      // mb
      this.size = size / 1000000 + "mb";
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
    const timeZoneOffsetHours = parseInt(
      timeZoneOffsetString.substring(1, 3),
      10
    );
    const timeZoneOffsetMinutes = parseInt(
      timeZoneOffsetString.substring(4, 6),
      10
    );

    // Adjust the date for the time zone offset
    date.setUTCHours(date.getUTCHours() - timeZoneOffsetHours);
    date.setUTCMinutes(date.getUTCMinutes() - timeZoneOffsetMinutes);

    this.created = date.toDateString() + " " + date.toTimeString();
  }

  position(): string {
    return "right";
  }

  toggleVisibility() {
    setTimeout(() => {
      this.isVisible = !this.isVisible;
      this.popOverContainer.style.display = this.isVisible ? "flex" : "none";
    }, 100);
  }

  reset() {
    this.isVisible = false;
    this.popOverContainer?.remove();
    this.btn?.remove();
    this.size = null;
    this.name = null;
    this.author = null;
    this.created = null;
    this.pdfProducer = null;
    this.pdfVersion = null;
    this.totalPages = null;
  }
}