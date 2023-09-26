const navBar = document.querySelector('.lista-navbar');
const toggleNav = document.querySelector('.menu-toggle');

toggleNav.addEventListener('click', () => {
    navBar.classList.toggle('active')
})