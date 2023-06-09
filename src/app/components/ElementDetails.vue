<template>
    <span>{{text}}</span>
</template>
<script>
export default {
    name: 'Element',
    setup(){
        const text = 'here is the element hoverer'

        return {
            text
        };
    },
}
</script>
