new Swiper('.swiper', {
    spaceBetween: 10,

    pagination: {
        el: '.questions__pagination',
        type: 'bullets',
        clickable: true,
        bulletActiveClass: 'questions__bullet_active',
        bulletClass: 'questions__bullet',
    },

    breakpoints: {
        1280: {
            spaceBetween: 20,
        }
    }
})