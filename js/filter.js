function initFilter() {
  const products = document.querySelectorAll('.products .product-card');
  const countEl = document.getElementById('product-count');
  const sortEl = document.getElementById('sort-select');
  const priceEl = document.getElementById('price-filter');
  const grid = document.querySelector('.products');

  function getPrice(card) {
    const saleEl = card.querySelector('.price-sale');
    if (saleEl) {
      const nums = saleEl.textContent.match(/\d+(\.\d+)?/g);
      return nums ? parseFloat(nums[0]) : 0;
    }
    const text = card.querySelector('.product-price').textContent;
    const nums = text.match(/\d+(\.\d+)?/g);
    return nums ? parseFloat(nums[0]) : 0;
  }

  function update() {
    let cards = Array.from(products);

    // Filter by price
    const priceFilter = priceEl ? priceEl.value : '';
    cards.forEach(c => c.style.display = '');
    if (priceFilter === 'under50') {
      cards.forEach(c => { if (getPrice(c) >= 50) c.style.display = 'none'; });
    } else if (priceFilter === '50to80') {
      cards.forEach(c => { if (getPrice(c) < 50 || getPrice(c) > 80) c.style.display = 'none'; });
    } else if (priceFilter === 'over80') {
      cards.forEach(c => { if (getPrice(c) <= 80) c.style.display = 'none'; });
    }

    // Sort
    const visible = cards.filter(c => c.style.display !== 'none');
    const sort = sortEl ? sortEl.value : 'default';
    if (sort === 'low') visible.sort((a, b) => getPrice(a) - getPrice(b));
    else if (sort === 'high') visible.sort((a, b) => getPrice(b) - getPrice(a));
    visible.forEach(c => grid.appendChild(c));

    // Count
    if (countEl) countEl.textContent = visible.length + ' items';
  }

  if (countEl) countEl.textContent = products.length + ' items';
  if (sortEl) sortEl.addEventListener('change', update);
  if (priceEl) priceEl.addEventListener('change', update);
}

initFilter();
