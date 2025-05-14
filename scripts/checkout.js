document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Payment processed. Redirecting to confirmation page...");
  window.location.href = "confirmation.html";
});