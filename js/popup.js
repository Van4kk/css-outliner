const menuButton = document.getElementById("css-outliner-menu-button");
const menu = document.getElementById("css-outliner-menu-wrapper");

const toggleMenu = () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};

menuButton.addEventListener("click", toggleMenu);

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.style.display = "none";
  }
});

document.getElementById("contribute").addEventListener("click", () => window.open("https://github.com/Van4kk/css-outliner", "_blank"));