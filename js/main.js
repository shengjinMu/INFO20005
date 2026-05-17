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

const searchBtn = document.querySelector('button[aria-label="Search"]');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.toggle('open');
    if (searchOverlay.classList.contains('open')) searchInput.focus();
  });
}

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

document.addEventListener('click', e => {
  if (!searchOverlay.contains(e.target) && searchBtn && !searchBtn.contains(e.target)) {
    searchOverlay.classList.remove('open');
  }
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