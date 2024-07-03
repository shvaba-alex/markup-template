import {loadScript} from "./utilits.js";

export function initYandexMap() {
    const maps =  document.querySelectorAll('.yandex-map');
    let isLoad = false;

    const mapObserver = new IntersectionObserver ((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!isLoad) {
                    loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=api_key", function(){
                        ymaps.load(() => {
                            isLoad = true;

                            setTimeout(() => {
                                createMap(entry.target)
                            }, 300)

                        });
                    });
                } else {
                    setTimeout(() => {
                        createMap(entry.target)
                    }, 300)
                }
                observer.unobserve(entry.target);
            }
        });
    });

    maps.forEach(map => {
        mapObserver.observe(map);
    });
}


function createMap(element) {
    const map =new ymaps.Map(element.getAttribute('id'), {
        center: [53.902735, 27.555696],
        zoom: 6,
        autoFitToViewport: 'always',
        controls: []
    });
    map.behaviors.disable('scrollZoom')
    element.querySelector('.map-placeholder').remove();
}