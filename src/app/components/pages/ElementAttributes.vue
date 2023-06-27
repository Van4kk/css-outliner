<template>
    <div class="w-[307px] ml-auto">
        <div v-for="(value, key) in condition.attributes"
             :key="key"
             class="group rounded px-4 mb-2 py-2 border border-white-hover focus-within:border-primary"
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

export default {
    name: 'ElementAttributes',
    components: { Icon },
    setup() {
        const avoidAttributes = ['style', 'selected-element'];

        const condition = reactive({
            attributes: {},
            key: ''
        });

        const init = () => {
            const element = document.querySelector('[selected-element]');

            if (!element) return;

            const attributes = getFilteredAttributes(element);

            condition.attributes = attributes;
        };

        function getFilteredAttributes(element) {
            const attributes = {};

            for (let i = 0; i < element.attributes.length; i++) {
                const attr = element.attributes[i];
                const { name, value } = attr;

                if (!avoidAttributes.includes(name)) {
                    attributes[name] = value;
                }
            }

            return attributes;
        }

        const addAttribute = () => {
            if (condition.key === '' || avoidAttributes.includes(condition.key.toLowerCase()) || condition.attributes[condition.key]) return;

            updateAttribute(condition.key, '');

            condition.attributes[condition.key] = '';
            condition.key = '';
        };

        const updateAttribute = (key, value) => {
            const newAttribute = value;
            const element = document.querySelector('[selected-element]');

            condition.attributes[key] = newAttribute;
            element.setAttribute(key, newAttribute);
        };

        const deleteAttribute = (key) => {
            const element = document.querySelector('[selected-element]');
            element.removeAttribute(key);

            delete condition.attributes[key];
        };

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