document.addEventListener("DOMContentLoaded", () => {
  // Default to dark mode
  document.body.classList.add("dark-mode");
});

const themeToggle = document.querySelector(".switch");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const currentTheme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
});
