<template>
    <nav id="css-outliner-header">
        <div id="css-outliner-header-buttons-wrapper">
            <Button @click="toggleClass('css-outliner-display-outline')"
                    :class="{ 'active': isActive }"
                    class="p-2 rounded-lg"
                    title="Outline"
                    icon="grid" ><Icon name="grid" /></Button>
            <Button @click="toggleClass('css-outliner-display-background')"
                    :class="{ 'active': isActive }"
                    class="p-2 rounded-lg"
                    title="Background Class"
                    icon="image"><Icon name="image" /></Button>
            />
<!--            <Button @click="toggleClass('css-outliner-display-pause')"-->
<!--                    :class="[condition.isPauseActive ? 'text-primary' : 'hover:text-white']"-->
<!--                    class="p-2 rounded-lg"-->
<!--                    title="Pause"-->
<!--                    icon="pause"-->
<!--            />-->
<!--            <Button @click="toggleClass('css-outliner-display-stop')"-->
<!--                    :class="{ 'active': isActive }"-->
<!--                    class="p-2 rounded-lg"-->
<!--                    title="Pause Class"-->
<!--            />-->
<!--            <Button @click="moveExtensionOnX"-->
<!--                    :class="{ 'rotate-180': condition.isOnLeft }"-->
<!--                    class="p-2 rounded-lg hover:text-white transform transition-transform"-->
<!--                    :title="condition.isOnLeft ? 'Move to right' : 'Move to left'"-->
<!--                    icon="arrow-left"-->
<!--            />-->
<!--            <EyeDropper />-->
        </div>
        <div class="flex-grow"></div>
        <Button @click="closeExtension"
                title="Close extension"
                icon="close"
        />
    </nav>
</template>
<script>
import { shallowReactive, getCurrentInstance, onUnmounted, onMounted, ref } from 'vue';
import Icon from "../Icon.vue";
import EyeDropper from "../EyeDropper.vue";
import Button from "../Button.vue";

export default {
    components: {Button, EyeDropper, Icon},
    emits: ['move'],
    setup(props, { emit }) {
        const instance = getCurrentInstance();

        const condition = shallowReactive({
            isOnLeft: false,
            isGridActive: false,
            isPauseActive: false,
        });

        function moveExtensionOnX() {
            emit('move', condition.isOnLeft ? 'right: 1.5rem;' : 'left: 1.5rem');

            condition.isOnLeft = !condition.isOnLeft;
        }

        const isActive = ref(false);
        const toggleClass = (cssClass) => {
            isActive.value = !isActive.value;
            document.body.classList.toggle(cssClass);
        };

        const handleKeydown = (event) => {
            if (event.key === 'Escape') {
                closeExtension();
            }
        };
        const closeExtension = () => {
            instance.appContext.config.globalProperties.destroyExtension();
        };
        onMounted(() => {
            document.addEventListener('keydown', handleKeydown);
        });
        onUnmounted(() => {
            document.removeEventListener('keydown', handleKeydown);
        });

        return {
            condition,
            isActive,
            moveExtensionOnX,
            closeExtension,
            toggleClass,
        };
    },
};
</script>