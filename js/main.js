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

// Search
const allProducts = [
  { name: 'Distressed Denim Vest', price: '$68.00', page: 'product.html' },
  { name: 'Tactical Harness Vest', price: '$72.00', page: 'product.html' },
  { name: 'Camo Street Vest', price: '$65.00', page: 'product.html' },
  { name: 'Quilted Puffer Vest', price: '$75.00', page: 'product.html' },
  { name: 'Classic Knit Jumper', price: '$55.00', page: 'dogwear.html' },
  { name: 'Striped Cotton Jumper', price: '$58.00', page: 'dogwear.html' },
  { name: 'Wool Blend Jumper', price: '$65.00', page: 'dogwear.html' },
  { name: 'Cable Knit Jumper', price: '$62.00', page: 'dogwear.html' },
  { name: 'Ribbed Turtleneck Jumper', price: '$60.00', page: 'dogwear.html' },
  { name: 'Walk Harness I', price: '$45.00', page: 'walk.html' },
  { name: 'Walk Harness II', price: '$48.00', page: 'walk.html' },
  { name: 'Walk Lead I', price: '$32.00', page: 'walk.html' },
  { name: 'Walk Lead II', price: '$35.00', page: 'walk.html' },
  { name: 'Walk Set I', price: '$55.00', page: 'walk.html' },
  { name: 'Walk Set II', price: '$58.00', page: 'walk.html' },
  { name: 'Plaid Pet Blanket', price: '$89.00', page: 'home.html' },
  { name: 'Poop Bag Holder — Yellow', price: '$35.00', page: 'sale.html' },
  { name: 'Poop Bag Holder — Pink', price: '$38.00', page: 'sale.html' },
  { name: 'Poop Bag Holder — Blue', price: '$42.00', page: 'sale.html' },
  { name: 'Poop Bag Holder — Red', price: '$30.00', page: 'sale.html' },
  { name: 'Poop Bag Holder — Green', price: '$28.00', page: 'sale.html' },
  { name: 'Leather Collar — Forest Green', price: '$32.00', page: 'sale.html' },
];

const searchOverlay = document.createElement('div');
searchOverlay.className = 'search-overlay';
searchOverlay.innerHTML = `<input class="search-input" id="search-input" type="text" placeholder="Search products..." /><div class="search-results" id="search-results"></div>`;
document.body.appendChild(searchOverlay);

const searchBackdrop = document.createElement('div');
searchBackdrop.className = 'search-backdrop';
document.body.appendChild(searchBackdrop);

const searchBtn = document.querySelector('button[aria-label="Search"]');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

function closeSearch() {
  searchOverlay.classList.remove('open');
  searchBackdrop.classList.remove('open');
  searchResults.innerHTML = '';
  searchInput.value = '';
}

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const isOpen = searchOverlay.classList.toggle('open');
    searchBackdrop.classList.toggle('open', isOpen);
    if (isOpen) searchInput.focus();
    else closeSearch();
  });
}

searchBackdrop.addEventListener('click', closeSearch);

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  searchResults.innerHTML = '';
  if (!q) return;
  allProducts.filter(p => p.name.toLowerCase().includes(q)).forEach(p => {
    const a = document.createElement('a');
    a.className = 'search-result-item';
    a.href = p.page;
    a.innerHTML = `<span>${p.name}</span><span class="search-result-price">${p.price}</span>`;
    searchResults.appendChild(a);
  });
});

// Cart
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  }
}

updateCartBadge();

function addToCart(id, name, price, image, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, name, price, image, qty });
  }
  saveCart(cart);
}