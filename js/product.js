// Size selection
document.querySelectorAll('.size-options button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-options button').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

// Colour selection
document.querySelectorAll('.colour-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.colour-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
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
  const colour = document.querySelector('.colour-btn.selected')?.textContent.trim() || 'Grey';
  addToCart('product4', `Tactical Harness Vest (${size} / ${colour})`, 72, 'images/product4.png');
  window.location.href = 'cart.html';
});
