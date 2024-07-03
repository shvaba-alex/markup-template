export const debounce = (callback, delay) => {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
};


export const unformatPhone = phone => phone.replace(/\D/g, '').replace(/^1/, '');

export function htmlToElement(html) {
    let template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

export const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    Yandex: function () {
        return navigator.userAgent.match(/YaBrowser/);
    },
    any: function () {
        return (isMobile.Android() || isMobile.Yandex() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

export function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

export function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
        const tc = getTileContainer(layer)
        let readyAll = true;
        tc.tiles.each(function (tile, number) {
            if (!tile.isReady()) {
                readyAll = false;
            }
        });
        if (readyAll) {
            resolve();
        } else {
            tc.events.once("ready", function() {
                resolve();
            });
        }
    });
}

export function getTileContainer(layers) {
    for (let layer in layers) {
        if (layer.hasOwnProperty(layer)) {
            if (
                layer[layer] instanceof ymaps.layer.tileContainer.CanvasContainer
                || layer[layer] instanceof ymaps.layer.tileContainer.DomContainer
            ) {
                return layer[layer];
            }
        }
    }
    return null;
}

export function loadScript(url, callback){
    const script = document.createElement("script");

    if (script.readyState){  // IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;

// Gets the mouse position
const getMousePos = (ev) => {
    return { 
        x : ev.clientX, 
        y : ev.clientY 
    };
};

export { map, lerp, clamp, getMousePos };