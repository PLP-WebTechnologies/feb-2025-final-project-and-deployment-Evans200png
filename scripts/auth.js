function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    localStorage.setItem("user", JSON.stringify({ email }));
    alert("Logged in successfully!");
    window.location.href = "profile.html";
  }
}

function logoutUser() {
  localStorage.removeItem("user");
  alert("You’ve been logged out.");
  window.location.href = "index.html";
}