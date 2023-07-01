<template>
    <div id="css-outliner-element-details-element-color"
         class="group css-outliner-element-details-colors-box"
         :style="{ backgroundColor: convertToHex(elementColors.color) }"
         @click="copyColor(convertToHex(elementColors.color))"
    >
        <span class="group-hover:translate-y-0 css-outliner-element-details-colors-box-color-code"
              :style="{ color: optimizeTextColor(elementColors.color) }"
        >
            {{ convertToHex(elementColors.color) }}
        </span>
        <span class="group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible css-outliner-element-details-colors-copy-text"
              :style="{ color: optimizeTextColor(elementColors.color) }"
        >
            {{ condition.copyColorText ? 'Copied!' : 'Copy color' }}
        </span>
    </div>
    <div id="css-outliner-element-details-element-fill-color"
         class="group css-outliner-element-details-colors-box"
         :style="{ backgroundColor: convertToHex(elementColors.fillColor) }"
         @click="copyColor(convertToHex(elementColors.fillColor))"
    >
        <span class="group-hover:translate-y-0 css-outliner-element-details-colors-box-color-code"
              :style="{ color: optimizeTextColor(elementColors.fillColor) }"
        >
            {{ convertToHex(elementColors.fillColor) }}
        </span>
        <span class="group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible css-outliner-element-details-colors-copy-text"
              :style="{ color: optimizeTextColor(elementColors.fillColor) }"
        >
            {{ condition.copyColorText ? 'Copied!' : 'Copy fill color' }}
        </span>
    </div>
    <div id="css-outliner-element-details-element-background-color"
         class="group css-outliner-element-details-colors-box"
         :style="{ backgroundColor: convertToHex(elementColors.backgroundColor) }"
         @click="copyColor(convertToHex(elementColors.backgroundColor))"
    >
        <span class="group-hover:translate-y-0 css-outliner-element-details-colors-box-color-code"
              :style="{ color: optimizeTextColor(elementColors.backgroundColor) }"
        >
            {{ convertToHex(elementColors.backgroundColor) }}
        </span>
        <span class="group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible css-outliner-element-details-colors-copy-text"
              :style="{ color: optimizeTextColor(elementColors.backgroundColor) }"
        >
            {{ condition.copyColorText ? 'Copied!' : 'Copy bg color' }}
        </span>
    </div>
</template>
<script>
//I'll refactor this component later

import { reactive } from "vue";
import { convertToHex, hslToRgb, optimizeTextColor } from "../../../../utils/helpers";

export default {
    methods: { optimizeTextColor },
    props: {
        elementColors: {
            type: Object,
            default: () => ({}),
        },
    },
    setup(props) {
        const condition = reactive({
            copyColorText: false
        });

        function copyColor(color) {
            condition.copyColorText = true;

            navigator.clipboard.writeText(color);

            setTimeout(() => {
                condition.copyColorText = false;
            }, 1400);
        }

        return {
            condition,
            copyColor,
            convertToHex
        }
    }
}
</script>