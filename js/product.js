// Size selection
document.querySelectorAll('.size-options button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-options button').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

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
document.querySelector('.btn-primary').addEventListener('click', () => {
  const size = document.querySelector('.size-options .selected')?.textContent || 'M';
  addToCart('product4', `Tactical Harness Vest (${size})`, 72, 'images/product4.png');
  window.location.href = 'cart.html';
});
