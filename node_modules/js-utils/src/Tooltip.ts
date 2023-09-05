/*
 * Tooltip
 *
 * Provide the parent (container/host) element and tooltip element
 * and position the tooltip depending on the parent.
 */

type Config = {
  position: "top" | "bottom" | "left" | "right";
  padding: number;
};

export default class Tooltip {
  protected parentRect: DOMRect;

  protected windowRect: DOMRect;

  constructor(protected parent: HTMLElement) {
    this.parentRect = parent.getBoundingClientRect();
  }

  public setTooltip(
    tooltip: HTMLElement,
    config: Config = { position: "bottom", padding: 5 }
  ): void {
    tooltip.style.position = "fixed";

    let tooltipRect = tooltip.getBoundingClientRect();
    let rectWidth = tooltipRect.width;

    switch (config.position) {
      case "top":
        tooltip.style.top = `${
          this.parentRect.top - tooltipRect.height - config.padding
        }px`;
        let centerLeftTop = this.parentRect.left + this.parentRect.width / 2;
        tooltip.style.left = `${centerLeftTop - tooltipRect.width / 2}px`;
        break;
      case "bottom":
        tooltip.style.top = `${
          this.parentRect.top + this.parentRect.height + config.padding
        }px`;
        let centerLeft = this.parentRect.left + this.parentRect.width / 2;
        tooltip.style.left = `${centerLeft - tooltipRect.width / 2}px`;
        break;
      case "left":
        tooltip.style.top = `${
          this.parentRect.top +
          this.parentRect.height / 2 -
          tooltipRect.height / 2
        }px`;
        tooltip.style.left = `${
          this.parentRect.left - tooltipRect.width - config.padding
        }px`;
        break;
      case "right":
        tooltip.style.top = `${
          this.parentRect.top +
          this.parentRect.height / 2 -
          tooltipRect.height / 2
        }px`;
        tooltip.style.left = `${
          this.parentRect.left + this.parentRect.width + config.padding
        }px`;
        break;
    }

    this.adjustTopPosition(tooltip, config);

    this.adjustLeftPosition(tooltip, config);
  }

  protected adjustTopPosition(tooltip: HTMLElement, config: Config) {
    // check if tooltip is outside of the screen
    const tooltipRect = tooltip.getBoundingClientRect();
    // if tooltip is outside of the screen, then we check and place it above the parent
    if (tooltipRect.top + tooltipRect.height > window.innerHeight) {
      // we are gonna place the tooltip above the parent
      // but if there is no space left to fit the tooltip in height, then we have to make it scrollable without placing it above the parent.
      if (tooltipRect.height > this.parentRect.top) {
        tooltip.style.height = `${window.innerHeight - this.parentRect.top}px`;
        tooltip.style.overflowY = "scroll";
      } else {
        switch (config.position) {
          case "bottom" || "top":
            tooltip.style.top = `${
              this.parentRect.top - tooltipRect.height - config.padding
            }px`;
            break;
          case "left" || "right":
            tooltip.style.top = `${
              this.parentRect.top - tooltipRect.height / 2
            }px`;
            break;
        }
      }
    }

    if (tooltipRect.top < 0) {
      tooltip.style.top =
        config.position === "bottom" || config.position === "top"
          ? `${this.parentRect.bottom + config.padding}px`
          : `${config.padding}px`;
    }
  }

  protected adjustLeftPosition(tooltip: HTMLElement, config: Config) {
    const tooltipRect = tooltip.getBoundingClientRect();
    if (tooltipRect.left + tooltipRect.width > window.innerWidth) {
      tooltip.style.left = `${
        window.innerWidth - tooltipRect.width - config.padding
      }px`;
    }
    if (tooltipRect.left < 0) {
      tooltip.style.left =
        config.position === "bottom" || config.position === "top"
          ? `config.paddingpx`
          : `${this.parentRect.right + config.padding}px`;
    }
  }
}
