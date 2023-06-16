<template>
    <div id="css-outliner-navigation-menu">
        <button v-for="nav in navigationData"
                :key="nav.id"
                :title="nav.name"
                @click="switchActivePage(nav.id, nav.id)"
                :class="{
                    'bg-opacity-5 text-primary': nav.id === activePage,
                    'hover:text-white': nav.id !== activePage
                }"
                class="transition-colors"
        >
            <Icon class="w-[31px] h-[31px]" :name="nav.icon" :active="nav.id === activePage" />
        </button>
    </div>
</template>
<script>
import { ref, shallowReactive } from "vue";
import { navigation } from "../../../utils/data";
import Icon from "../Icon.vue";

export default {
    name: 'Navigation',
    components: { Icon },
    emits: ['changeActiveMenu'],
    setup(props, { emit }) {
        const navigationData = shallowReactive(navigation)
        const activePage = ref('');

        const switchActivePage = (pageId, elementId) => {
            activePage.value = pageId;
            emit('changeActiveMenu', pageId, elementId);
        }

        return {
            navigationData,
            activePage,
            switchActivePage,
        }
    },
};
</script>