const products = [
  { 
    id: 1,
    name: '365 Signature Hoodie',
    mobileName: "Organic Skinny High Waist Raw Hem Jeans",
    price: 33.95, currency: "€",
    image:"./assets/images/product-image/product-1.png",
    color: "green"
  },
  {
    id: 2,
    name: 'Organic Skinny High Waist Jeans',
    mobileName: "Organic Skinny High Waist Raw Hem Jeans",
    price: 33.95, currency: "€",
    image:"./assets/images/product-image/product-2.png",
    color: "cream"
  },
  {
    id: 3,
    name: 'Organic Skinny High Waist Jeans',
    mobileName: "Organic Skinny High Waist Raw Hem Jeans",
    price: 33.95,
    currency: "€",
    image:"./assets/images/product-image/product-3.png",
    color: "blue"
  },
];

const mobileMediaQuery = 800;

function handleScreenSizeChange(products, index) {
  if (window.innerWidth < mobileMediaQuery) {
    return products[index].mobileName;
  } else {
    return products[index].name;
  }
}

function renderProductList(products) {
  const productListDiv = document.getElementById('productList');
  products.forEach((product, index) => {
      const div = document.createElement('div');
      div.classList.add('product-container')
      div.innerHTML = `
        <img draggable='false' src='${product.image}' alt='product-image'/>
        <div draggable='false' class='product-name'>${handleScreenSizeChange(products, index)}</div>
        <div draggable='false' class='product-price-container'>
          <span class='product-price'> ${product.currency}${product.price} </span>
          <span class='product-color'>
            <ul>
              <li class='blue selected'></li>
              <li class='brown'></li>
              <li class='pink'></li>
              <li class='green'></li>
            </ul>
          </span>
        </div>
      `;
      productListDiv.appendChild(div);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  renderProductList(products);
});
