// const menuButton = document.getElementById("css-outliner-menu-button");
// const menu = document.getElementById("css-outliner-menu-wrapper");
//
// const toggleMenu = () => {
//   menu.style.display = menu.style.display === "flex" ? "none" : "flex";
// };
//
// menuButton.addEventListener("click", toggleMenu);
//
// document.addEventListener("click", (event) => {
//   if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
//     menu.style.display = "none";
//   }
// });
//
// document.getElementById("contribute").addEventListener("click", () => window.open("https://github.com/Van4kk/css-outliner", "_blank"));

// Create a new div element
const container = document.createElement('div');

// Create a shadow root for the container
const shadowRoot = container.attachShadow({mode: 'open'});

// Fetch the contents of popup.html and inject it into the shadow root
fetch(chrome.runtime.getURL('../public/popup.html'))
    .then(response => response.text())
    .then(html => {
      shadowRoot.innerHTML = html;

      // Fetch the contents of your CSS file
      return fetch(chrome.runtime.getURL('../assets/styles/css/main.css'))
          .then(response => response.text())
          .then(css => {
            // Create a new <style> element and inject the CSS content into it
            const style = document.createElement('style');
            style.textContent = css;

            // Append the <style> element to the shadow root
            shadowRoot.appendChild(style);

            // Append the container to the body of the web page
            document.body.appendChild(container);
          });
    });
