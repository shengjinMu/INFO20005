function renderConfirmation() {
  const cart = getCart();
  const container = document.getElementById('confirm-items');
  const shippingEl = document.getElementById('confirm-shipping');
  const totalEl = document.getElementById('confirm-total');
  if (!container) return;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 100 ? 0 : 10;
  const total = subtotal + shipping;

  container.innerHTML = cart.map(item => `
    <div class="confirm-row">
      <span>${item.name}${item.qty > 1 ? ' × ' + item.qty : ''}</span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    </div>
  `).join('');

  shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  totalEl.textContent = `$${total.toFixed(2)}`;

  localStorage.removeItem('cart');
  updateCartBadge();
}

renderConfirmation();
