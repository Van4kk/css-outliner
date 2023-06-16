<template>
    <div id="css-outliner-welcome-wrapper">
        <div id="css-outliner-welcome-content-wrapper">
            <span>
                <Icon name="click" />
            </span>
            <h1>Click an element to see it's properties</h1>
            <div id="css-outliner-welcome-shortcuts-list">
                <div id="css-outliner-welcome-shortcuts-dropdown" @click="toggleDropdown">
                    <span>See default keyboard shortcuts</span>
                    <div class="flex-grow"></div>
                    <Icon :size=iconSize name="chevron" :class="{ 'rotate-180': isDropdownOpen }" />
                </div>
                <div v-if="isDropdownOpen" id="css-outliner-welcome-shortcuts-dropdown-content">
                    <div v-for="option in shortcutsOptions" class="css-outliner-welcome-shortcuts-dropdown-row">
                        <div class="my-1.5">
                            <template v-for="(button, index) in option.value.buttons">
                                <KBD :name="button" />
                                <span v-if="index < option.value.buttons.length - 1" class="mx-1">+</span>
                            </template>
                        </div>
                        <div class="css-outliner-welcome-shortcuts-dropdown-item-text">
                            <span class="">{{ option.label }}</span>
                            <p class="">{{ option.value.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Icon from "../vui/Icon.vue";
import { shortcutsOptions } from "../../utils/data";
import { ref } from "vue";
import KBD from "../vui/Keyboard.vue";

export default {
    name: 'Welcome',
    components: { KBD, Icon },
    props: {
        iconSize: {
            type: Number,
            default: 20
        },
    },
    setup() {
        const isDropdownOpen = ref(false);

        const toggleDropdown = () => {
            isDropdownOpen.value = !isDropdownOpen.value;
        };

        return {
            isDropdownOpen,
            toggleDropdown,
            shortcutsOptions
        }
    },
}
</script>