const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('menu-overlay');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('open');
  overlay.classList.add('open');
});

menuClose.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  overlay.classList.remove('open');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  overlay.classList.remove('open');
});