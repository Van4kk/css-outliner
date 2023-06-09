<template>
    <svg v-if="iconData" :width="size" :height="size" :fill="fill" :class="className" :stroke-width="strokeWidth" :stroke="strokeColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <slot v-html="iconData"></slot>
    </svg>
    <SvgNotFound v-else :name="name" />
</template>
<script>
import icons from "../../utils/icons";
import SvgNotFound from "./errors/SvgNotFound.vue";

export default {
    components: { SvgNotFound },
    props: {
        name: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            default: 24,
            validator: (size) => [18, 20, 24].includes(size)
        },
        fill: {
            type: String,
            default: 'none'
        },
        strokeWidth: {
            type: String,
            default: '1.5'
        },
        strokeColor: {
            type: String,
            default: 'currentColor'
        },
        className: {
            type: String,
            default: '',
        },
    },
    computed: {
        iconData() {
            if (this.name in icons) {
                return icons[this.name];
            }
            return false;
        },
    },
};
</script>