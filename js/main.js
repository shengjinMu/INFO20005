// Side menu
const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('menu-overlay');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('open');
    overlay.classList.add('open');
  });
}

if (menuClose) {
  menuClose.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('open');
  });
}

if (overlay) {
  overlay.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('open');
  });
}

// Cart
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(id, name, price, image) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, image, qty: 1 });
  }
  saveCart(cart);
}