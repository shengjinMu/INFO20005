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

const sizeButtons = document.querySelectorAll('.size-options button');
let selectedSize = 'M';
sizeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    sizeButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedSize = btn.textContent;
  });
});

let qty = 1;
document.getElementById('qty-minus').addEventListener('click', () => {
  if (qty > 1) { qty--; document.getElementById('qty-value').textContent = qty; }
});
document.getElementById('qty-plus').addEventListener('click', () => {
  qty++; document.getElementById('qty-value').textContent = qty;
});

document.querySelector('.btn-primary').addEventListener('click', () => {
  addToCart('jumper1', `Classic Knit Jumper (${selectedSize})`, 55, 'images/jumper1.png', qty);
  window.location.href = 'cart.html';
});

document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const span = btn.querySelector('span');
    const isOpen = content.style.display === 'block';
    content.style.display = isOpen ? 'none' : 'block';
    span.textContent = isOpen ? '+' : '−';
  });
});
