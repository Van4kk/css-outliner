<template>
    <nav class="h-16 px-4 pt-4 rounded-lg text-gray-300 flex items-center">
        <div class="bg-gray-100 bg-opacity-5 rounded-lg">
            <button role="button">Bug Report</button>
        </div>
        <div>
            <button role="button">Menu</button>
        </div>
    </nav>
</template>
<script>
import { shallowReactive, getCurrentInstance } from 'vue';
export default {
    emits: ['move'],
    setup(props, {emit}) {
        const state = shallowReactive({
            isOnLeft: false,
            isGridActive: false,
            isCancelActive: false,
            isPauseActive: false,
        });

        function moveLeftRight() {
            emit('move', state.isOnLeft ? 'right: 1.5rem;' : 'left: 1.5rem');

            state.isOnLeft = !state.isOnLeft;
        }

        const instance = getCurrentInstance();
        function closeExtension() {
            instance.appContext.config.globalProperties.destoryExtension();
        }

        return {
            moveLeftRight,
            closeExtension,
        };
    }
};
</script>