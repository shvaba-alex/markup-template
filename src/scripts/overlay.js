class Overlay {

    constructor() {
        this.overlay = document.querySelector(".page-overlay");
    }

    open() {
        document.body.style.overflow = "hidden";
        this.overlay.setAttribute("aria-hidden", "false");
    }

    close() {
        document.body.style.overflow = ""
        this.overlay.setAttribute("aria-hidden", "true");
    }
}

export const OVERLAY = new Overlay();