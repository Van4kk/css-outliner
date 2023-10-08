<template>
    <div :class="['css-outliner-drop-down', dropdownWidth, className]" :tabindex="tabindex" @blur="dropped = false">
        <div class="css-outliner-drop-down-selected-option"
             @click="dropped = !dropped"
        >
            <span>
                {{ selected }}
            </span>
            <Icon v-if="icon" name="chevron"
                  :class="{ 'rotate-180': dropped }"
            />
        </div>
        <div class="css-outliner-drop-down-options"
             :class="[
                 { 'css-outliner-drop-down-options-dropped': dropped },
                 optionsWidth,
             ]"
        >
            <div v-for="(option, item) of options" :key="item"
                 @click="selectOption(option)"
                 class="css-outliner-drop-down-option"
            >
                {{ option.name }}
            </div>
        </div>
    </div>
</template>
<script>
import Icon from "./Icon.vue";
import { ref, watch } from "vue";

export default {
    name: 'DropDown',
    components: { Icon },
    props: {
        className: {
            type: String,
            default: ''
        },
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
        icon: {
            type: Boolean,
            required: true
        },
        dropdownWidth: {
            type: String,
            default: 'w-full'
        },
        optionsWidth: {
            type: String,
            default: 'w-dropdown-options'
        }
    },
    setup(props, { emit }) {
        const selected = ref(props.default ? props.default : (props.options.length > 0 ? props.options[0].name : null));

        const dropped = ref(false);

        watch(selected, (value) => {
            emit('input', value);
        });

        const selectOption = (option) => {
            selected.value = option.name;
            dropped.value = false;
        };

        return {
            selected,
            dropped,
            selectOption,
        }
    }
};
</script>