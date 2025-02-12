import Button from "../interfaces/Button";
import { Data } from "../pdf-viewer";
import { EventBus, PDFFindController } from "pdfjs-dist/web/pdf_viewer";
import { onClickOutside } from 'js-utils';

export default class SearchButton implements Button {
    protected btnContainer: HTMLDivElement;

    protected container: HTMLDivElement;

    protected show: boolean = false;

    protected query: string;

    protected caseSensitive: boolean = false;

    protected entireWord: boolean = false;

    protected highlightAll: boolean = false;

    protected findPrevious: boolean = false;

    protected matchDiacritics: boolean = false;

    protected type: string = 'again';

    protected eventBus: EventBus;

    protected pdfFindController: PDFFindController;

    protected statusIndicator: HTMLSpanElement = null;

    build(data: Data): HTMLElement {
        this.eventBus = data.eventBus;
        this.pdfFindController = data.pdfFindController;
        this.btnContainer = document.createElement('div');
        this.btnContainer.className = 'relative';
        let btn = document.createElement("button");
        btn.className =
            "outline-none border-none hover:bg-gray-100  p-2";
        btn.title = "search in the document";
        btn.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';
        this.btnContainer.append(btn);
        btn.addEventListener('click', () => {
            setTimeout(() => {
                this.toggleBox()
            }, 300)
        });
        this.prepareBox();
        this.buildStatusIndicator();
        this.buildInput();
        this.buildButtons();

        // listen search result
        this.eventBus.on('updatefindcontrolstate', (result) => {
            console.log(result.source.highlightMatches)
            switch (result.state) {
                case 0:
                    setTimeout(() => {
                        if (!result.source.highlightMatches) {
                            return;
                        }
                        let current = result.source._matchesCountTotal > 0 && result.matchesCount.current === 0 ? 1 : result.matchesCount.current;
                        this.statusIndicator.innerText = `Showing ${current} of ${result.source._matchesCountTotal}`;
                        // get hightlight
                        let element = document.querySelector('.highlight.selected.appended');
                        const { top, height } = data.buttonsContainer.getBoundingClientRect();
                        data.bodyContainer.scrollTop =
                            data.bodyContainer.scrollTop +
                            parseFloat(
                                element?.getBoundingClientRect().top.toString() ?? '0'
                            ) -
                            height - top - 20;
                    }, 100)

                    break;
                case 1:
                    this.statusIndicator.innerText = 'Not found';
                    break;
                case 3:
                    this.statusIndicator.innerText = `Searching..`;
                    break;
            }
        })
        return this.btnContainer;
    }

    protected toggleBox() {
        this.show = !this.show;

        this.container.classList.toggle('hidden');

        if (this.show) {
            this.container.querySelector("input")?.focus();
            document.addEventListener('keydown', (e) => this.listenEvents(e));
        } else {
            document.removeEventListener('keydown', (e) => this.listenEvents(e));
        }
    }

    listenEvents(e: KeyboardEvent) {
        switch (e.code) {
            case 'Enter':
                this.search('again');
                break;
            case 'Escape':
                this.toggleBox();
                break;
        }
    }

    protected prepareBox() {
        this.container = document.createElement("div");
        this.container.className =
            "absolute z-[1000] hidden gap-y-1 left-0 mt-2 p-2 border bg-white shadow rounded flex flex-col";
        this.btnContainer.append(this.container);

        onClickOutside(this.container, () => {
            if (this.show) {
                this.toggleBox();
                this.eventBus.dispatch('findbarclose', {
                    source: this,
                });
                this.statusIndicator.innerText = '';
                (this.container.querySelector('input') as HTMLInputElement).value = '';
                this.container.querySelectorAll('button').forEach((btn) => {
                    if (btn.classList.contains('bg-gray-100')) btn.classList.remove('bg-gray-100')
                })
                this.resetValues();
            }
        });
    }

    protected buildStatusIndicator() {
        this.statusIndicator = document.createElement('span');
        this.statusIndicator.className = 'text-sm text-gray-500';
        this.container.append(this.statusIndicator);
    }

    protected buildInput() {
        // build box
        let div = document.createElement('div');
        div.className = 'flex gap-x-1';
        // build input box
        let queryInput = document.createElement("input");
        queryInput.className = "focus:outline-none px-2 py-1 border rounded";
        queryInput.placeholder = 'Search...';
        queryInput.addEventListener("change", (e) => {
            this.query = (e.target as HTMLInputElement).value;
            this.search();
        });
        // build left and right search button
        let leftButton = document.createElement('button');
        leftButton.className = 'p-1 rounded border'
        leftButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>';
        leftButton.addEventListener('click', () => {
            this.search('again', true);
        })
        let rightButton = document.createElement('button');
        rightButton.className = 'p-1 rounded border'
        rightButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>'
        rightButton.addEventListener('click', () => {
            this.search('again');
        });

        div.append(queryInput);
        div.append(leftButton)
        div.append(rightButton)
        this.container.append(div);
    }

    protected buildButtons() {
        // input

        let div = document.createElement('div');
        div.className = 'flex flex-wrap gap-2';
        // checkbox
        let buttons = [
            {
                label: "Case Sensitive",
                callback: (_) => {
                    this.caseSensitive = !this.caseSensitive;
                    this.search();

                },
            },
            {
                label: "Entire Word",
                callback: (_) => {
                    this.entireWord = !this.entireWord;
                },
            },
            {
                label: "Highlight All",
                callback: (_) => {
                    this.highlightAll = !this.highlightAll;
                    this.search();
                },
            },
            {
                label: "Match Diacritics",
                callback: (_) => {
                    this.matchDiacritics = !this.matchDiacritics;
                    this.search();
                },
            },
        ];
        buttons.forEach((button) => {
            div.append(this.#buildButton(button.label, button.callback));
        });

        this.container.append(div);

    }

    #buildButton(label: string, callback: Function): HTMLButtonElement {
        let btn = document.createElement('button');
        btn.className = 'px-2 py-1 rounded border text-sm whitespace-nowrap';
        // btn.style.width = (label.length * 8) + 'px';
        btn.innerText = label;
        btn.addEventListener('click', (e) => {
            callback(e);
            btn.classList.toggle('bg-gray-100');
        });
        return btn;
    }

    search(type = '', findPrevious = false) {
        if (this.query.trim().length === 0) {
            this.statusIndicator.innerText = 'Please specify search text';
            return;
        }
        this.eventBus.dispatch("find", {
            source: this,
            type: type,
            query: this.query,
            caseSensitive: this.caseSensitive,
            entireWord: this.entireWord,
            highlightAll: this.highlightAll,
            findPrevious: findPrevious,
            matchDiacritics: this.matchDiacritics,
        });
    }

    onClick(data: Data) {
    }

    position(): string {
        return "left";
    }

    resetValues() {
        this.query = '';
        this.caseSensitive = false;
        this.entireWord = false;
        this.highlightAll = false;
        this.matchDiacritics = false;
    }

    reset() {
        this.btnContainer?.remove();
        this.btnContainer = null;
        this.eventBus = null;
        this.pdfFindController = null;
        this.resetValues();
    }
}
