<template>
    <page-wrapper>
        <div class="">
            <h1 >{{message}}</h1>
        </div>
    </page-wrapper>
</template>
<script>
import PageWrapper from "../vui/sectinos/PageWrapper.vue";

export default {
    name: 'ElementAttributes',
    components: {PageWrapper},
    props: {
        activeElementId: {
            type: Number,
            default: 0
        },
    },
    setup() {
        const message = "Hello from attributes";

        return {
            message,
        }
    },
};
</script>