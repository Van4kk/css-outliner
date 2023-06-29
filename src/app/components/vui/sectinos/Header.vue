<template>
    <nav id="css-outliner-header">
        <div id="css-outliner-header-buttons">
            <button @click="moveExtensionOnX"
                    class="p-2 transform transition-transform"
                    :title="condition.isOnLeft ? 'Move to right' : 'Move to left'"
            >
                <Icon :class="{ 'rotate-180': condition.isOnLeft }" name="double-chevron" />
            </button>
            <button @click="toggleClass('isOutlineActive','css-outliner-display-outline')"
                    :class="[ condition.isOutlineActive ? 'text-primary' : 'text-white']"
                    class="p-2"
                    title="Outline"
            >
              <Icon :class="[ condition.isOutlineActive ? 'fill-primary' : 'fill-white']" name="grid" />
            </button>
            <button @click="toggleClass('isBackGroundActive','css-outliner-display-background')"
                    :class="[ condition.isBackGroundActive ? 'text-primary fill-primary' : 'text-white']"
                    class="p-2"
                    title="Background"
            >
              <Icon name="image" />
            </button>
            <button @click="toggleClass('isPauseActive','css-outliner-display-pause')"
                    class="p-2"
                    title="pause"
            >
                <Icon :class="[condition.isPauseActive ? 'text-primary' : 'text-white']" name="pause" stroke-width="2.5" />
            </button>
        </div>
        <div class="flex-grow"></div>
        <button @click="closeExtension"
                class="p-2 border border-transparent rounded hover:border-primary hover:bg-primary-horizon hover:text-primary hover:fill-primary transition duration-200"
                title="Close extension"
        >
          <Icon name="close" />
        </button>
    </nav>
</template>
<script>
import { shallowReactive, getCurrentInstance, onUnmounted, onMounted } from 'vue';
import Icon from "../Icon.vue";
import EyeDropper from "../EyeDropper.vue";
import Button from "../Button.vue";

export default {
    components: { Button, EyeDropper, Icon },
    emits: ['moveExtension', 'stopApp'],
    setup(props, { emit }) {
        const instance = getCurrentInstance();

        const condition = shallowReactive({
            isOnLeft: false,
            isBackGroundActive: false,
            isOutlineActive: false,
            isPauseActive: false,
        });

        const moveExtensionOnX = () => {
            const style = condition.isOnLeft ? 'right: 1.5rem;' : 'left: 1.5rem;';
            emit('moveExtension', style);

            condition.isOnLeft = !condition.isOnLeft;
        };

        const toggleClass = (status, cssClass) => {
            condition[status] = !condition[status];
            document.body.classList.toggle(cssClass);
        };

        const closeExtension = () => {
            instance.appContext.config.globalProperties.destroyExtension();
        };

        const handleKeydown = (event) => {
            if (event.key === 'Escape') {
                closeExtension();
            }
            if (event.key === 'f') {
                toggleClass('isPauseActive','css-outliner-display-pause');
            }
            if (event.key === 'o') {
                toggleClass('isOutlineActive','css-outliner-display-outline');
            }
            if (event.key === 'b') {
                toggleClass('isBackGroundActive','css-outliner-display-background');
            }
            if (event.ctrlKey && event.keyCode === 37) {
                if (!condition.isOnLeft) {
                    moveExtensionOnX();
                }
            }
            if (event.ctrlKey && event.keyCode === 39) {
                if (condition.isOnLeft) {
                    moveExtensionOnX();
                }
            }
        };
        onMounted(() => {
            document.addEventListener('keydown', handleKeydown);
        });
        onUnmounted(() => {
            document.removeEventListener('keydown', handleKeydown);
        });

        return {
            condition,
            moveExtensionOnX,
            closeExtension,
            toggleClass,
        };
    },
};
</script>