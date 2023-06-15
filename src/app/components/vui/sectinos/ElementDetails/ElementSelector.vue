<template>
    <div id="css-outliner-element-selectors">
        <span>{{ selector.tag }}</span>
        <span>{{ selector.id }}</span>
        <span>{{ selector.classes }}</span>
    </div>
</template>
<script>
export default {
    props: {
        selector: {
            type: Object,
            default: () => ({
                tag: '',
                id: '',
                classes: '',
            }),
        },
    },
};
</script>