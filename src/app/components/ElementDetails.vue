<template>
    <div id="css-outliner-element-details-hover-box" ref="container">
        <ElementDetails
            :properties="state.properties"
            v-if="state.properties !== null"
        />
    </div>
</template>
<script>
import { ref, onMounted, reactive, onUnmounted, } from 'vue';
import ElementDetails from "./vui/sectinos/ElementDetails/index.vue";
import { generateGetBoundingClientRect } from '../utils/helpers';
import HtmlElement from '../utils/HtmlElement';
import createPopper from '../utils/createPopper';

/**
 * @source https://github.com/Kholid060/inspect-css
 */
export default {
    components: { ElementDetails },
    setup() {
        const container = ref(null);
        const state = reactive({
            properties: null,
            popper: null,
        });
        const virtualElement = {
            getBoundingClientRect: generateGetBoundingClientRect(),
        };

        function mouseMoveHandler({ target, clientX, clientY }) {
            const isPaused = document.body.classList.contains('css-outliner-display-pause');
            const isMatchExtensionEl = target.classList.contains('css-outliner');

            // TODO: implement disable links and buttons actions

            if (isPaused || isMatchExtensionEl) return container.value.classList.add('hidden');
            container.value.classList.remove('hidden');

            virtualElement.getBoundingClientRect = generateGetBoundingClientRect(clientX, clientY);
            state.popper.update();

            if (!target.matches('.hovered-element,#css-outliner')) {
                const properties = new HtmlElement(target);
                state.properties = properties.getAll();

                const element = document.querySelector('.hovered-element');

                if (element) element.classList.remove('hovered-element');

                target.classList.add('hovered-element');
                target.addEventListener(
                    'mouseleave',
                    () => {
                        target.classList.remove('hovered-element');
                    },
                    { once: true },
                );
            }
        }

        onMounted(() => {
            state.popper = createPopper({
                container: virtualElement,
                content: container.value,
                options: {
                    placement: 'right-end',
                },
            });

            window.addEventListener('mousemove', mouseMoveHandler);
        });
        onUnmounted(() => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        });

        return {
            container,
            state,
        };
    },
};
</script>