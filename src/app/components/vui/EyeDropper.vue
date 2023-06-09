<template>
    <template v-if="isSupported">
        <div>isSupported: {{ isSupported }}</div>
        <div>sRGBHex: <span :style="{ color: sRGBHex }">{{ sRGBHex }}</span></div>
        <button :disabled="!isSupported" @click="() => open()">
            Open Eye Dropper
        </button>
    </template>
    <div v-else>
        <span>Not Supported by Your Browser</span>
    </div>
</template>
<script>
import { useEyeDropper } from '@vueuse/core'

export default {
    name: 'EyeDropper',
    setup() {
        const { isSupported, open, sRGBHex } = useEyeDropper()

        return {
            isSupported,
            open,
            sRGBHex
        }
    },
};
</script>