function addProduct(name, price, category) {
  const newProduct = {
    id: Date.now().toString(),
    name,
    price: parseFloat(price),
    category
  };
  products.push(newProduct);
  displayProducts(products);
}

function deleteProduct(id) {
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    displayProducts(products);
  }
}