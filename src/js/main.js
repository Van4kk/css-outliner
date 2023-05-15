import { createApp } from "vue";
import App from './App.vue';

const app = createApp(App);

export function insertShadowRoot(shadowRoot) {
    App.shadowRoot = shadowRoot;
}

export default app;