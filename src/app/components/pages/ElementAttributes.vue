<template>
    <div id="css-outliner-element-attributes-tab-wrapper">
        <form id="css-outliner-element-attributes-tab-attribute-form" @submit.prevent="addAttribute">
            <div class="flex-grow">
                <input id="css-outliner-element-attributes-tab-attribute-name-input"
                       type="text"
                       v-model="condition.key"
                       placeholder="Add attribute"
                       required
                />
                <input id="css-outliner-element-attributes-tab-attribute-value-input"
                       type="text"
                       v-model="condition.keyValue"
                       placeholder="Add attribute value"
                />
            </div>
            <div class="shrink-0">
                <button id="css-outliner-element-attributes-tab-attribute-submit-button" type="submit">
                    <Icon name="plus" />
                </button>
            </div>
        </form>
        <div v-for="(value, key) in condition.attributes"
             :key="key"
             class="group rounded px-4 mb-2 py-2 border border-white-hover hover:border-primary focus-within:border-primary"
        >
            <label class="text-sm.5 text-white/40" :for="key">{{ key }}</label>
            <div class="flex items-center">
                <input @input="updateAttribute(key, $event.target.value)"
                       :id="key"
                       :value="value"
                       :placeholder="value"
                       type="text"
                       :title="value"
                       class="flex-1 text-white mr-4 bg-transparent focus:outline-none"
                />
                <Icon @click="deleteAttribute(key)" class="cursor-pointer hover:text-primary" name="delete" />
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, reactive, watch } from "vue";
import Icon from "../vui/Icon.vue";
import { getFilteredAttributes } from "../../utils/helpers";

export default {
    name: 'ElementAttributes',
    components: { Icon },
    props: {
        activeElementId: {
            type: Number,
            default: 0,
        },
    },
    setup(props) {
        const avoidAttributes = ['style', 'css-outliner-selected-element'];

        const condition = reactive({
            attributes: {},
            key: '',
            keyValue: ''
        });

        const init = () => {
            const element = document.querySelector('[css-outliner-selected-element]');

            if (!element) return;

            //for better readability
            const attributes = getFilteredAttributes(element, avoidAttributes);

            condition.attributes = attributes;
        };

        const addAttribute = () => {
            if (condition.key === '' || avoidAttributes.includes(condition.key.toLowerCase()) || condition.attributes[condition.key]) return;

            const newAttribute = condition.key.trim();
            const newValue = condition.keyValue.trim();

            if (newAttribute === '') return;

            updateAttribute(newAttribute, newValue);

            condition.attributes = {
                ...condition.attributes,
                [newAttribute]: newValue
            };
            condition.key = '';
            condition.keyValue = '';
        };

        const updateAttribute = (key, value) => {
            const newAttribute = value;
            const element = document.querySelector('[css-outliner-selected-element]');

            condition.attributes[key] = newAttribute;
            element.setAttribute(key, newAttribute);
        };

        const deleteAttribute = (key) => {
            const element = document.querySelector('[css-outliner-selected-element]');
            element.removeAttribute(key);

            delete condition.attributes[key];
        };


        watch(() => props.activeElementId, init);
        onMounted(init);

        return {
            condition,
            addAttribute,
            deleteAttribute,
            updateAttribute,
        }
    },
};
</script>
