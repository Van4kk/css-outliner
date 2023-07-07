<template>
    <div id="css-outliner-in-root-container" style="right: 1.5rem" ref="appContainer">
        <div id="css-outliner-wrapper">
            <Header @moveExtension="moveAppContainer" />
            <div id="css-outliner-content">
                <keep-alive>
                    <component :active-element-id="pageCondition.activeElementId" :is="pageCondition.activePage"></component>
                </keep-alive>
            </div>
            <Navigation @changeActiveMenu="changeActiveMenu" />
        </div>
    </div>
</template>
<script>
import { onMounted, onUnmounted, shallowReactive, ref } from 'vue';
import globalEvent from "./../utils/globalEvent.js"
import Navigation from "./vui/sectinos/Navigation.vue";
import Header from "./vui/sectinos/Header.vue";
import Icon from "./vui/Icon.vue";
import ElementProperties from "./pages/ElementProperties";
import PageAssets from "./pages/PageAssets.vue";
import PageColorPalette from "./pages/PageColorPalette.vue";
import Tools from "./pages/Tools.vue";
import Settings from "./pages/Settings.vue";

export default {
    name: 'AppPages',
    components: { Icon, Navigation, Header, ElementProperties, PageAssets, PageColorPalette, Tools, Settings },
    setup() {
        const appContainer = ref(null);

        const moveAppContainer = (styles) => {
            appContainer.value.style.setProperty('right', '');
            appContainer.value.style.setProperty('left', '');
            appContainer.value.style.cssText += styles;
        };

        const pageCondition = shallowReactive({
            activeElementId: 0,
            activePage: 'element-properties',
        });

        const changeActiveMenu = (menuId, elementId) => {
            pageCondition.activePage = menuId;
            pageCondition.activeElementId = elementId;
        };

        /**
         * @source https://github.com/Kholid060/inspect-css
         */
        onMounted(() => {
            globalEvent.init(() => {
                pageCondition.activeElementId += 1;
            });
        });
        onUnmounted(() => globalEvent.removeListeners());

        return {
            appContainer,
            pageCondition,
            moveAppContainer,
            changeActiveMenu,
        };
    }
};
</script>