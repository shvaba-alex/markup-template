import Swiper from "swiper";
import { Navigation } from 'swiper/modules';

export function initSliders() {
    const bannersSwiper = new Swiper('.trade-section__slider', {
        slidesPerView: 1.25,
        modules: [Navigation],
        navigation: {
            nextEl: '.trade-section .swipper-navigation-next',
            prevEl: '.trade-section .swipper-navigation-prev',
        },
        spaceBetween: 16,
        slidesOffsetAfter: 27,
        slidesOffsetBefore: 20,
        
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesOffsetAfter: 37,
                slidesOffsetBefore: 40,
            },
            758: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesOffsetAfter: 37,
                slidesOffsetBefore: 40,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 48,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 48,
                slidesOffsetAfter: 0,
                slidesOffsetBefore: 0,
            },
        }
    });
}