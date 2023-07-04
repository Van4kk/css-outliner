<template>
    <page-wrapper>
        <h1>{{hello}}</h1>
    </page-wrapper>
<!--  TODO: dropdown with sort -->
<!--  TODO: export all assets -->
<!--  TODO: on hover appear the name with `..` and the ability to export only this image -->
<!--  TODO: show the size of the image -->
</template>
<script>
import PageWrapper from "../vui/sectinos/PageWrapper.vue";

export default {
    components: {PageWrapper},
    setup() {
        const hello = 'Hello From Page Assets'

        return {
            hello
        }
    }
}
</script>