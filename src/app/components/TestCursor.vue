<template>
    <div id="css-outliner-element-details-hover-box" @mousemove="updateCursorPosition" :style="divStyle">Follows Cursor</div>
</template>
<script>
import { ref, computed, onMounted, onUnmounted, reactive } from 'vue';

export default {
    setup() {
        const condition = reactive({
            offset: {
                top: 25,
                left: 25,
                right: 0,
                bottom: 0,
                X: 225,
                Y: 225,
            },

        });

        const position = ref({
            x: 0,
            y: 0
        });

        const updateCursorPosition = (event) => {
            const viewPort = window
            const rect = document.documentElement.getBoundingClientRect();

            console.log(document.documentElement.getBoundingClientRect())
            const maxWidth = Math.floor(viewPort.innerWidth - condition.offset.X);
            const maxHeight = Math.floor(viewPort.innerHeight - condition.offset.Y);

            position.value.x = Math.min(event.clientX, maxWidth);
            position.value.y = Math.min(event.clientY, maxHeight);

            if (viewPort.innerWidth - position.value.x < 100 && viewPort.innerHeight - position.value.y < 100) {
                position.value.x = Math.max(position.value.x - condition.offset.X - 200, 0);
                position.value.y = Math.max(position.value.y - condition.offset.Y - 200, 0);
            }

            if (viewPort.innerWidth - position.value.x < 100) {
                position.value.x = Math.max(position.value.x - condition.offset.X - 200, 0);
            }

            if (viewPort.innerHeight - position.value.y < 100) {
                position.value.y = Math.max(position.value.y - condition.offset.Y - 200, 0);
            }
        };

        const divStyle = computed(() => ({
            transform: `translate3d(${position.value.y + condition.offset.top}px, ` + `-${position.value.x + condition.offset.left}px, 0)`,
            // top: `${position.value.y + condition.offset.top}px`,
            // left: `${position.value.x + condition.offset.left}px`,
        }));

        onMounted(() => {
            window.addEventListener('mousemove', updateCursorPosition);
        });

        onUnmounted(() => {
            window.removeEventListener('mousemove', updateCursorPosition);
        });

        return {
            position,
            updateCursorPosition,
            divStyle,
        };
    },
};
</script>
