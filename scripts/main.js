document.addEventListener("DOMContentLoaded", () => {
  const featuredSection = document.getElementById("featured-products");
  const sampleProducts = [
    { id: 1, name: "T-Shirt", price: 19.99 },
    { id: 2, name: "Laptop", price: 999.99 }
  ];

  sampleProducts.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h4>${p.name}</h4><p>$${p.price}</p>`;
    featuredSection.appendChild(div);
  });
});