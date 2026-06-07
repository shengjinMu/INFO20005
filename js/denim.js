// Image slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

function goTo(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

document.querySelector('.slider-prev').addEventListener('click', () => goTo(current - 1));
document.querySelector('.slider-next').addEventListener('click', () => goTo(current + 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

// Accordion
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const isOpen = content.classList.toggle('open');
    btn.querySelector('span').textContent = isOpen ? '−' : '+';
  });
});

// Quantity
let qty = 1;
document.getElementById('qty-minus').addEventListener('click', () => {
  if (qty > 1) { qty--; document.getElementById('qty-value').textContent = qty; }
});
document.getElementById('qty-plus').addEventListener('click', () => {
  qty++;
  document.getElementById('qty-value').textContent = qty;
});

// Add to cart
document.getElementById('add-to-cart-btn').addEventListener('click', () => {
  const size = document.getElementById('size-select').value;
  if (!size) { alert('Please select a size.'); return; }
  addToCart('product3', `Distressed Denim Vest (${size})`, 68, 'images/product3.png', qty);
  showCartModal(`Distressed Denim Vest (${size})`);
});

document.getElementById('applepay-btn').addEventListener('click', () => {
  const size = document.getElementById('size-select').value;
  if (!size) { alert('Please select a size.'); return; }
  addToCart('product3', `Distressed Denim Vest (${size})`, 68, 'images/product3.png', qty);
  window.location.href = 'checkout.html#applepay';
});

document.getElementById('more-payment-btn').addEventListener('click', () => {
  const size = document.getElementById('size-select').value;
  if (!size) { alert('Please select a size.'); return; }
  addToCart('product3', `Distressed Denim Vest (${size})`, 68, 'images/product3.png', qty);
  window.location.href = 'checkout.html';
});
