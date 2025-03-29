document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeStyle = document.getElementById("theme-style");
  const currentTheme = localStorage.getItem("theme") || "light";

  // Aplicar tema salvo
  if (currentTheme === "dark") {
    themeStyle.href = "css/dark-mode.css";
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeStyle.href = "css/style.css";
    themeToggle.textContent = "🌙 Dark Mode";
  }

  // Alternar tema
  themeToggle.addEventListener("click", function () {
    if (themeStyle.href.includes("style.css")) {
      themeStyle.href = "css/dark-mode.css";
      themeToggle.textContent = "☀️ Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      themeStyle.href = "css/style.css";
      themeToggle.textContent = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
});
