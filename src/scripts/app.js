import LazyLoad from "vanilla-lazyload";
import {isTouchDevice} from "./utilits.js";

function initLazyLoad() {
    new LazyLoad({
        elements_selector: ['[data-lazy-load]'], class_loaded: 'lazy-loaded',
    });
}


function setStyleClassesToHtml() {
    if (isTouchDevice()) document.querySelector('html').classList.add('touch');

    window.addEventListener('load', () => {
        document.documentElement.classList.add('loaded');
    });
}

export function initScripts() {
    setStyleClassesToHtml();
    initLazyLoad();

    window.addEventListener('load', () => {
        
    });
}
