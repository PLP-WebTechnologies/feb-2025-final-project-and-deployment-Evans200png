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

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelector(".testimonials p");

  const messages = [
    "“Best of all time products with quality.”",
    "“Fast delivery and top-notch customer support!”",
    "“Highly recommend ShopSmart for all your gadget needs.”",
    "“Amazing discounts on the latest fashion trends!”",
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % messages.length;
    testimonials.textContent = messages[index];
  }, 4000);

  console.log("ShopSmart Home loaded.");
});
