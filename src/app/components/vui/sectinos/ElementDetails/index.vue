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
        <p id="#css-outliner-element-details-shortcut-tip" v-show="showInfo">
            Click or press <KBD name="Ctrl" /> + <KBD name="Space" /> to edit element
        </p>
    </div>
</template>
<script>
import ElementSelector from './ElementSelector.vue';
import ElementComputed from './ElementComputed.vue';
import Icon from "../../Icon.vue";
import KBD from "../../Keyboard.vue";

export default {
    components: { KBD, Icon, ElementComputed, ElementSelector },
    props: {
        properties: {
            type: Object,
            default: () => ({
                selector: {},
                computedStyles: {},
                size: {},
            }),
        },
        showInfo: {
            type: Boolean,
            default: true,
        },
    },
    setup() {
        return {
            directions: ['top', 'right', 'bottom', 'left'],
        };
    },
};
</script>