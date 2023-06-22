<template>
    <div class="w-[308px]">
        <h1 >{{message}}</h1>
    </div>
</template>
<script>


export default {
    name: 'ElementAttributes',
    components: {},
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