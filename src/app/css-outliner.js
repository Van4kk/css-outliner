import { createApp } from "vue";
import App from './App.vue?shadow';
import { addAppCss, isIdenticalExisting, setAttributes } from "./utils/helpers";
import cssOutlinerContainerStyles from '!to-string-loader!css-loader!postcss-loader!./assets/styles/css/ccs-outliner.css';
import cssOutlinerAppCssStyles from '!to-string-loader!css-loader!postcss-loader!./assets/styles/css/ccs-outliner-app.css';

/**
 *
 * ↓ This method of compiling Vue3 app into shadow root is inspired from the link below ↓
 * @link https://github.com/Kholid060/inspect-css/blob/master/src/content-scripts/main.js
 *
 */

const app = createApp(App);

function insertShadowRoot(shadowRoot) {
    App.shadowRoot = shadowRoot;
}

(() => {
    if (isIdenticalExisting("#css-outliner, .css-outliner")) return;

    //Creating shadow root app wrapper
    const appContainer= document.createElement("div");
    appContainer.attachShadow({ mode: "open" });
    setAttributes(appContainer, {
        id: "css-outliner",
        class: "css-outliner-shadow-wrapper",
    });

    insertShadowRoot(appContainer.shadowRoot);

    const content = generateAppContent(appContainer);
    const css = addAppCss(cssOutlinerContainerStyles);

    app.config.globalProperties.destroyExtension = () => {
        content();
        css();

        const activeElement = document.querySelector('[selected-element]');
        if (activeElement) activeElement.removeAttribute('selected-element');

        ['css-outliner-display-grid', 'css-outliner-display-pause', 'css-outliner-display-background', 'hovered-element'].forEach((classes) => {
            document.body.classList.remove(classes);
        });
    };

    document.body.appendChild(appContainer);
})();

function generateAppContent(container) {
    //Container inside shadow root
    const appContent= document.createElement("div")

    //App styles
    const style = document.createElement('style');
    style.innerText = cssOutlinerAppCssStyles;

    app.mount(appContent); //Mounting Vue3 app

    container.shadowRoot.appendChild(appContent);
    container.shadowRoot.appendChild(style);

    return function () {
        app.unmount();
        document.body.removeChild(container);
    };
}