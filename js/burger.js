let iconMenu = document.querySelector('img');
let list = document.querySelector('ul.list');
let nav = document.querySelector('nav');
let header = document.querySelector('header');
let btn = document.querySelector('button');

header.style.alignItems = 'center';
btn.addEventListener('click', addMenu);
function addMenu() {
    if (list.classList.contains('active')) {
        list.classList.remove('active');
        iconMenu.src = 'img/jpg/menu_palka.jpg';
        nav.style.height = 'auto';
        header.style.alignItems = 'center';
        btn.classList.remove('rotate');
    } else {
        list.classList.add('active');
        iconMenu.src = 'img/jpg/menu_krestik.jpg';
        nav.style.height = '100vh';
        header.style.alignItems = 'flex-start';
        btn.classList.add('rotate');
    }
}