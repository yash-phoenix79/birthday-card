// Add your JavaScript code here (if needed)
// JavaScript for toggling light and dark modes
const modeToggle = document.getElementById("mode-toggle");
const modeIcon = document.getElementById("mode-icon");
const body = document.body;
const wrapper = document.querySelector(".wrapper");
const addi = document.querySelector(".add");

// Check the user's preference for light or dark mode
const currentMode = localStorage.getItem("mode");
if (currentMode === "dark") {
  enableDarkMode();
}

// Toggle between light and dark mode
modeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  body.classList.add("dark-mode");
  localStorage.setItem("mode", "dark");
  modeIcon.classList.remove("fa-sun");
  modeIcon.classList.add("fa-moon");
  wrapper.classList.add("dark-mode");
  addi.classList.add("dark-mode");
}

function enableLightMode() {
  body.classList.remove("dark-mode");
  localStorage.setItem("mode", "light");
  modeIcon.classList.remove("fa-moon");
  modeIcon.classList.add("fa-sun");
  wrapper.classList.remove("dark-mode");
  addi.classList.remove("dark-mode");
}
