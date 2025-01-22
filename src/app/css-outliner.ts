import {createApp} from "vue";
import App from "@app/App.vue";
import {addAppCss, isIdenticalExisting, setAttributes} from "@utils/helpers";
import cssOutlinerContainerStyles from "@assets/styles/css/ccs-outliner.css?inline";
import cssOutlinerAppCssStyles from "@assets/styles/css/ccs-outliner-app.css?inline";

type ShadowRootAppContainer = HTMLDivElement & { shadowRoot: ShadowRoot };

const app = createApp(App);

function insertShadowRoot(shadowRoot: ShadowRoot): void {
  (App as any).shadowRoot = shadowRoot;
}

((): void => {
  if (isIdenticalExisting('#css-outliner, .css-outliner')) return;
  
  // Create shadow root app wrapper
  const appContainer: ShadowRootAppContainer = document.createElement('div') as ShadowRootAppContainer;
  appContainer.attachShadow({mode: 'open'});
  setAttributes(appContainer, {
    id: 'css-outliner',
    class: 'css-outliner-shadow-wrapper',
  });
  
  insertShadowRoot(appContainer.shadowRoot!);
  
  const content = generateAppContent(appContainer);
  const css = addAppCss(cssOutlinerContainerStyles);
  
  app.config.globalProperties.destroyExtension = (): void => {
    content();
    css();
    
    const activeElement: Element | null = document.querySelector('[css-outliner-selected-element]');
    if (activeElement) activeElement.removeAttribute('css-outliner-selected-element');
    
    [
      'css-outliner-display-grid',
      'css-outliner-display-pause',
      'css-outliner-display-background',
      'css-outliner-hovered-element',
    ].forEach((className: string): void => {
      document.body.classList.remove(className);
    });
  };
  
  document.body.appendChild(appContainer);
})();

// Function to generate app content and styles
function generateAppContent(container: ShadowRootAppContainer) {
  // Container inside shadow root
  const appContent: HTMLDivElement = document.createElement('div');
  
  // App styles
  const style: HTMLStyleElement = document.createElement('style');
  style.innerText = cssOutlinerAppCssStyles;
  
  app.mount(appContent); // Mounting Vue3 app
  
  container.shadowRoot!.appendChild(appContent);
  container.shadowRoot!.appendChild(style);
  
  return (): void => {
    app.unmount();
    document.body.removeChild(container);
  };
}
