<template>
    <div v-show="loading" class="css-outliner-loading-spinner" :style="{ width: `${size}px`, height: `${size}px` }">
        <div v-bind:style="[spinnerStyle, animDiv1]"></div>
        <div v-bind:style="[spinnerStyle, animDiv2]"></div>
        <div v-bind:style="[spinnerStyle, animDiv3]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
    </div>
</template>
<script>
import { validateDuration, calculatePropertyValue } from "../../utils/helpers";

export default {
    name: 'Spinner',
    props: {
        loading: {
            type: Boolean,
            default: true,
        },
        size: {
            type: Number,
            default: 24,
        },
        color: {
            type: String,
            default: '#7f58af',
        },
        duration: {
            type: String,
            default: '1.2s',
            validator: validateDuration,
        },
    },
    data() {
        return {
            spinnerStyle: {
                borderWidth: `${this.size * 0.1}px`,
                borderColor: `${this.color} transparent transparent transparent`,
                animationDuration: this.duration,
            },
        }
    },
    computed: {
        animDiv1() {
            return calculatePropertyValue('animationDelay', this.duration, -0.375)
        },
        animDiv2() {
            return calculatePropertyValue('animationDelay', this.duration, -0.25)
        },
        animDiv3() {
            return calculatePropertyValue('animationDelay', this.duration, -0.125)
        },
    },
}
</script>