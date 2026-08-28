// Add a product here. Copy one line, change its details, and the grid updates automatically.
const products = [
  { name: 'Pearl drop earrings', detail: 'Handmade jewelry', price: '$34.00', color: '#e8d7c8' },
  { name: 'Rose candle', detail: 'Scented soy wax', price: '$26.00', color: '#d99b8c' },
  { name: 'Wedding favor set', detail: 'Made for your day', price: '$48.00', color: '#e5cfa7' },
  { name: 'Keepsake gift box', detail: 'Ready to give', price: '$42.00', color: '#d2b8c3' },
  { name: 'Initial charm', detail: 'Personalized jewelry', price: '$28.00', color: '#d5a96d' },
  { name: 'Vanilla candle', detail: 'Warm, soft fragrance', price: '$22.00', color: '#e5d28b' }
];

const productGrid = document.querySelector('#product-grid');

productGrid.innerHTML = products.map((product, index) => `
  <article class="product-card">
    <div class="product-image" data-number="0${index + 2}" style="--product-color: ${product.color}" role="img" aria-label="${product.name}"></div>
    <div class="product-info"><div><h3>${product.name}</h3><p>${product.detail}</p></div><span class="product-price">${product.price}</span></div>
  </article>
`).join('');

document.querySelector('#email-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'You are in';
  button.disabled = true;
});
