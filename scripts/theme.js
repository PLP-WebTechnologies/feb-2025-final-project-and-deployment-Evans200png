function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const mode = document.body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("theme", mode);
}

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
};
