// Cart logic using localStorage
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  const totalContainer = document.getElementById("cart-total");

  container.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name}</span>
      <span>Qty: ${item.quantity}</span>
      <span>Price: $${item.price * item.quantity}</span>
      <button onclick="removeFromCart('${item.id}')">Remove</button>
    `;
    container.appendChild(div);
    total += item.price * item.quantity;
  });

  totalContainer.textContent = total.toFixed(2);
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

window.onload = loadCart;