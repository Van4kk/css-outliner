<template>
    <div id="css-outliner-element-details">
        <element-selector :selector="properties.selector"></element-selector>
        <p id="css-outliner-element-font">
            <span>Aa</span>
            {{ properties.computedStyles.fontFamily }}
        </p>
        <element-computed :computed-styles="properties.computedStyles" title="margin">
            <element-computed :computed-styles="properties.computedStyles" title="padding">
                <div id="css-outliner-element-details-size-properties">
                    {{ Math.floor(properties.size.width) }}
                    x
                    {{ Math.floor(properties.size.height) }}
                </div>
            </element-computed>
        </element-computed>
        <p id="css-outliner-element-details-shortcut-tip" v-show="showInfo">
            Click or press <KBD name="Ctrl" /> + <KBD name="Space" /> to edit element
        </p>
        <div id="css-outliner-element-details-colors" v-show="showColors">
            <element-colors :element-colors="properties.allColors"></element-colors>
        </div>
    </div>
</template>
<script>
import ElementSelector from './ElementSelector.vue';
import ElementComputed from './ElementComputed.vue';
import Icon from "../../Icon.vue";
import KBD from "../../Keyboard.vue";
import ElementColors from "./ElementColors.vue";

export default {
    components: { ElementColors, KBD, Icon, ElementComputed, ElementSelector },
    props: {
        properties: {
            type: Object,
            default: () => ({
                selector: {},
                computedStyles: {},
                size: {},
                allColors: {},
            }),
        },
        showInfo: {
            type: Boolean,
            default: true,
        },
        showColors: {
            type: Boolean,
            default: false
        },
    },
    setup() {
        return {
            directions: ['top', 'right', 'bottom', 'left'],
        };
    },
};
</script>