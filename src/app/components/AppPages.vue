<template>
    <div class="fixed z-full backdrop-blur-xl top-6" style="right: 1.5rem" ref="baseWindow">
        <div class="max-h-for-popup min-h-for-popup w-80 bg-gray-900 rounded-xl flex flex-col h-full">
            <!-- Top Buttons -->
            <Header />
            <!-- Content -->
            <div id="css-outliner-content" class="my-2 py-2 flex-1 overflow-auto scroll">
<!--                <keep-alive>-->
<!--                    <component :active-element-id="state.activeElementId" :is="state.activeMenu"></component>-->
<!--                </keep-alive>-->
            </div>
            <!-- Navigation Menu -->
            <Navigation />
        </div>
    </div>
</template>
<script>
import { onMounted, onUnmounted, shallowReactive, ref } from 'vue';
import Navigation from "./vui/sectinos/Navigation.vue";
import Header from "./vui/sectinos/Header.vue";

export default {
    name: 'AppPages',
    components: { Navigation, Header },
    setup() {

        const g = "dasdas";

        return {
            g,
        };
    }
    // components: {DefaultMenu, InitialMenu, Navigation, Icon},
    // setup() {
    //     const menuItems = [
    //         {},
    //         {},
    //         {},
    //         {},
    //         {},
    //     ]
    //
    //     const baseWindow = ref(null);
    //
    //     const state = shallowReactive({
    //         activeElementId: 0,
    //         activeMenu: 'edit-properties',
    //     });
    //     function moveElement(value) {
    //         baseWindow.value.style.cssText = value;
    //     }
    //
    //     onMounted(() => {
    //         globalEvent.init(() => {
    //             state.activeElementId += 1;
    //         });
    //     });
    //     onUnmounted(() => globalEvent.removeListeners());
    //
    //     return {
    //         state,
    //         menuItems,
    //         baseWindow,
    //         moveElement,
    //     };
    // },
};
</script>