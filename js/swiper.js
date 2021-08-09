// var menuButton = document.querySelector('.menu-button');
        // var openMenu = function () {
        //     swiper.slidePrev();
        // };
        // var swiper = new Swiper('.swiper_container_wrap', {
        //     slidesPerView: 'auto',
        //     initialSlide: 1,
        //     resistanceRatio: 0,
        //     slideToClickedSlide: true,
        //     on: {
        //         slideChangeTransitionStart: function () {
        //             var slider = this;
        //             if (slider.activeIndex === 0) {
        //                 menuButton.classList.add('cross');
        //                 // required because of slideToClickedSlide
        //                 menuButton.removeEventListener('click', openMenu, true);
        //             } else {
        //                 menuButton.classList.remove('cross');
        //             }
        //         },
        //         slideChangeTransitionEnd: function () {
        //             var slider = this;
        //             if (slider.activeIndex === 1) {
        //                 menuButton.addEventListener('click', openMenu, true);
        //             }
        //         },
        //     },
        // });
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay : 5000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});