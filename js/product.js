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
  if (qty > 1) {
    qty--;
    document.getElementById('qty-value').textContent = qty;
  }
});

document.getElementById('qty-plus').addEventListener('click', () => {
  qty++;
  document.getElementById('qty-value').textContent = qty;
});

// Add to cart
document.getElementById('add-to-cart-btn').addEventListener('click', () => {
  const size = document.getElementById('size-select').value;
  if (!size) { alert('Please select a size.'); return; }
  addToCart('product4', `Tactical Harness Vest (${size})`, 72, 'images/product4.png', qty);
  showCartModal(`Tactical Harness Vest (${size})`);
});

document.getElementById('applepay-btn').addEventListener('click', () => {
  const size = document.getElementById('size-select').value;
  if (!size) { alert('Please select a size.'); return; }
  addToCart('product4', `Tactical Harness Vest (${size})`, 72, 'images/product4.png', qty);
  window.location.href = 'checkout.html#applepay';
});

document.getElementById('more-payment-btn').addEventListener('click', () => {
  const size = document.getElementById('size-select').value;
  if (!size) { alert('Please select a size.'); return; }
  addToCart('product4', `Tactical Harness Vest (${size})`, 72, 'images/product4.png', qty);
  window.location.href = 'checkout.html';
});
