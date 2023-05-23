<template>
    <main class="app">
<!--        <html-element></html-element>-->
        <app-pages></app-pages>
    </main>
</template>
<script>
    import AppPages from "./components/AppPages.vue";
    //import HtmlElement from "./components/Element.vue";

    export default {
        components: { /*HtmlElement,*/ AppPages },
    };
</script>