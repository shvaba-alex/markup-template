function Overlay() {
    this.overlay = document.querySelector(".page-overlay");
}

Overlay.prototype.open = function () {
    document.body.style.overflow = "hidden";
    this.overlay.setAttribute("aria-hidden", "false");
}

Overlay.prototype.close = function () {
    this.overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""
}

export const OVERLAY = new Overlay();