<template>
    <main id="app">
        <ElementDetails />
        <AppPages />
    </main>
</template>
<script>
import AppPages from "./components/AppPages.vue";
import ElementDetails from "./components/ElementDetails.vue";

export default {
    components: { ElementDetails, AppPages },
};
</script>