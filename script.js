window.addEventListener ('load', start)

function start () {
    navMenu()
}

/* NAVMENU */
function navMenu () {
    const hamburgerMenu = document.querySelector('.hamburger-menu')
    const navMenu =  document.querySelector('.nav-menu')
    const navLink = document.querySelectorAll('.nav-link')

    // IT CHANGES THE HAMBURGER BUTTON (TOGGLE = SWITCH)
    hamburgerMenu.addEventListener('click', function () {
        toggle ()
    })

    // WHEN YOU CLICK, THE MENU CLOSES
    navLink.forEach((item) => {
        item.addEventListener('click', function () {
            if (hamburgerMenu.classList.contains('when-active')) {
                toggle ()
            }
        })
    })

    function toggle () {
        hamburgerMenu.classList.toggle('when-active')
        navMenu.classList.toggle('active')
    }
}}
