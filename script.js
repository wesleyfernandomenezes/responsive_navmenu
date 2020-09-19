window.addEventListener ('load', start)

function start () {
    navMenu()
}

/* NAVMENU */
function navMenu () {
    const hamburgerMenu = document.querySelector('.hamburger-menu')
    const navMenu = document.querySelector('.nav-menu')

    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('when-active')
        navMenu.classList.toggle('active')
    })
}
