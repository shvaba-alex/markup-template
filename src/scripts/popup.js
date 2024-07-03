import {OVERLAY} from "./overlay.js";

const pageContentElement = document.querySelector('.page__wrapper');

export class Popup {
    #isOpen = false;

    get isOpen() {
        return this.#isOpen;
    }

    set isOpen(value) {
        this.#isOpen = value;
        this.popupElement.setAttribute("aria-hidden", !value);
    }

    constructor(popupId) {
        this.popupId = popupId;
        this.popupElement = document.getElementById(this.popupId);
        if(!this.popupElement) return;
        this.buttonController = document.querySelector(`button[aria-controls="${this.popupId}"]`);
        this.closeButton = this.popupElement.querySelector("[data-popup-close]");
        this._addEvents();
    }


    _addEvents() {
        this.buttonController.addEventListener("click", () => {
            this.open();
        
        });

        this.closeButton.addEventListener("click", () => {
            this.close();
        });

        document.addEventListener("click", (event) => {
            if (this.isOpen && !this.popupElement.contains(event.target)) {
                event.stopPropagation();
                this.close();
            }
        }, true);


        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
                if (isNotCombinedKey) {
                    this.close();
                }
            }
        });
    }

    open() {
        this.closeButton.focus();
        this.isOpen = true;
        OVERLAY.open();
        pageContentElement.setAttribute('inert', '');
    }

    close() {
        OVERLAY.close();
        pageContentElement.removeAttribute('inert');
        this.isOpen = false;
        this.buttonController.focus();
    }
}


export function initPopups() {
    new Popup('burger-popup');
}