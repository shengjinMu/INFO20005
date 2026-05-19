function renderCheckout() {
  const cart = getCart();
  const container = document.getElementById('checkout-items');
  if (!container) return;

  container.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <div class="checkout-item-img-wrap">
        <img src="${item.image}" alt="${item.name}" />
        <span class="checkout-item-badge">${item.qty}</span>
      </div>
      <div class="checkout-item-info">
        <p class="checkout-item-name">${item.name}</p>
        <p class="checkout-item-qty">$${item.price.toFixed(2)} × ${item.qty}</p>
      </div>
      <p class="checkout-item-total">$${(item.price * item.qty).toFixed(2)}</p>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 100 ? 0 : 10;

  document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('checkout-shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  document.getElementById('checkout-total-amount').textContent = `$${(subtotal + shipping).toFixed(2)} AUD`;
}

renderCheckout();
