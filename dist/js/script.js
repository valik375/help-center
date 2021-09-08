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
            grabCursor: true,
        }
    }
})

function footerDropDown() {
    const btns = document.querySelectorAll('.footer__title-wrapper')
    const links = document.querySelectorAll('.footer__links')
    const icons = document.querySelectorAll('.footer__icon')

    btns.forEach((item, index) => {
        item.addEventListener('click', () => {
            const dataBtn = item.getAttribute('data-dropdown-link')

            icons.forEach((link, index) => {
                const dataIcon = link.getAttribute('data-dropdown-icon')
                if(dataBtn === dataIcon) {
                    link.classList.toggle('footer__icon_active')
                }
            })

            links.forEach((link, index) => {
                const dataLink = link.getAttribute('data-dropdown-content')
                if(dataBtn === dataLink) {
                    link.classList.toggle('footer__links_active')
                }
            })
        })
    })
}

function mobileMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.navbar__item_desktop')

    burger.addEventListener('click', () => {
        menu.classList.toggle('navbar__item_active')
        burger.classList.toggle('burger_active')
    })
}


window.onload = () => {
    if (window.innerWidth < 760) {
        footerDropDown()
    }
    mobileMenu()
}
