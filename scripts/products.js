const products = [
  { id: "1", name: "Wireless Mouse", price: 25, category: "Electronics" },
  { id: "2", name: "Bluetooth Speaker", price: 50, category: "Electronics" },
  { id: "3", name: "Running Shoes", price: 80, category: "Fashion" },
  { id: "4", name: "Water Bottle", price: 15, category: "Home" },
];

function displayProducts(items) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <p>Category: ${item.category}</p>
      <button onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function filterByCategory(category) {
  const filtered = products.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortByPrice(order) {
  const sorted = [...products].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
  displayProducts(sorted);
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(p => p.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

displayProducts(products);