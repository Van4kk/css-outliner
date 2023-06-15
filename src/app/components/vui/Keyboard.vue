<template>
    <kbd v-if="icon" :class="className">
        <Icon :name="name" />
    </kbd>
    <kbd :class="className">{{name}}</kbd>
</template>
<script>

import Icon from "./Icon.vue";

export default {
    name: 'KBD',
    components: { Icon },
    props: {
        name: String,
        icon: Boolean,
        className: String
    }
}
</script>