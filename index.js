const products = [
  { id: 1, name: '365 Signature Hoodie', price: 33.95, currency: "€", image:"./assets/images/product-image/product-1.png", color: "green" },
  { id: 2, name: 'Organic Skinny High Waist Jeans', price: 33.95, currency: "€", image:"./assets/images/product-image/product-2.png", color: "cream" },
  { id: 3, name: 'Organic Skinny High Waist Jeans', price: 33.95, currency: "€", image:"./assets/images/product-image/product-3.png", color: "blue" },
];

// Ürünleri HTML listesine dönüştürme
function renderProductList(products) {
  const productListDiv = document.getElementById('productList');
  products.forEach(product => {
      const div = document.createElement('div');
      div.classList.add('product-container')
      div.innerHTML = `
        <img draggable='false' src='${product.image}' alt='product-image' />
        <span draggable='false' class='product-name'>${product.name}</span>
        <div draggable='false' class='product-price-container'>
          <span class='product-price'> ${product.currency}${product.price} </span>
          <span class='product-color'>
            <ul>
              <li class='red'></li>
              <li class='green'></li>
              <li class='cream'></li>
              <li class='blue'></li>
            </ul>
          </span>
        </div>
      `;
      productListDiv.appendChild(div);
  });
}

// Sayfa yüklendiğinde ürün listesini oluştur
document.addEventListener('DOMContentLoaded', () => {
  renderProductList(products);
});