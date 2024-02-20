export class Accordion {
    constructor(domNode) {
        this.rootEl = domNode;
        this.buttonEl = this.rootEl.querySelector('button[aria-expanded]');

        const controlsId = this.buttonEl.getAttribute('aria-controls');
        this.id = this.buttonEl.getAttribute('id');
        this.contentEl = document.getElementById(controlsId);

        this.isOpen = this.buttonEl.getAttribute('aria-expanded') === 'true';

        this.onOpen = () => {}

        // add event listeners
        this.buttonEl.addEventListener('click', this.onButtonClick.bind(this));
    }

    onButtonClick() {
        this.toggle(!this.isOpen);
    }

    toggle(open) {
        // don't do anything if the open state doesn't change
        if (open === this.isOpen) {
            return;
        }

        // update the internal state
        this.isOpen = open;

        // handle DOM updates
        this.buttonEl.setAttribute('aria-expanded', `${open}`);
        if (open) {
            this.contentEl.setAttribute('aria-hidden', 'false');

            this.onOpen(this);
        } else {
            this.contentEl.setAttribute('aria-hidden', 'true');
        }
    }

    // Add public open and close methods for convenience
    open() {
        this.toggle(true);
    }

    close() {
        this.toggle(false);
    }
}

export function initAccordions() {
    const accordions = [];
    document.querySelectorAll(".accordion")
        .forEach((accordion) => {
            accordions.push(new Accordion(accordion));
        });

    accordions.forEach(accordion => {
        accordion.onOpen = (openedAccordion => {
            accordions.filter(accordion => accordion !== openedAccordion).forEach(accordion => accordion.close())
        });
    });

    accordions.forEach(accordion => {
        if ('#' + accordion.id === location.hash) {
            accordion.open();
        }
    });

    window.addEventListener('hashchange', () => {
        accordions.forEach(accordion => {
            if ('#' + accordion.id === location.hash) {
                accordion.open();
            }
        });
    })

}