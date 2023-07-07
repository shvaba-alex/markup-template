import {OVERLAY} from "./overlay.js";

export class Popup {
    #isOpen = false;

    get isOpen() {
        return this.#isOpen;
    }

    set isOpen(value) {
        this.#isOpen = value;
        this.popupElement.setAttribute("aria-hidden", !value);
    }

    constructor(buttonController) {
        this.buttonController = buttonController;
        this.popId = buttonController.getAttribute("aria-controls");
        this.popupElement = document.getElementById(this.popId);
        this.closeButton = this.popupElement.querySelector("[data-popup-close]");

        this.buttonController.addEventListener("click", () => {
            this.open();
            OVERLAY.open();
        });

        this.closeButton.addEventListener("click", () => {
            OVERLAY.close();
            this.close();
        });

        document.addEventListener("focus", (event) => {
            if (this.isOpen && !this.popupElement.contains(event.target)) {
                event.stopPropagation();
                this.closeButton.focus();
            }
        }, true);
    }

    open() {
        this.isOpen = true;

        this.closeButton.focus();
    }

    close() {
        this.isOpen = false;
        this.buttonController.focus();
    }
}
