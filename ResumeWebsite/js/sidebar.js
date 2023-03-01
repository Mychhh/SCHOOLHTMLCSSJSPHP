const hamburgerButton = document.querySelector('.hamburger_menu__button')
const sidebar = document.querySelector('.sidebar')

let isSideBarOpen = false

hamburgerButton.addEventListener('click', () => {

    if (isSideBarOpen) {
        hamburgerButton.classList.remove('active')

        sidebar.classList.remove('active')
        sidebar.classList.add('inactive')
    } else {
        hamburgerButton.classList.add('active')

        sidebar.classList.remove('inactive')
        sidebar.classList.add('active')
    }

    isSideBarOpen = !isSideBarOpen

})