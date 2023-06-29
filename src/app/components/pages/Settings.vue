<template>
    <page-wrapper>
        <h1>{{hey}}</h1>
        {{version()}}
    </page-wrapper>
</template>
<script>
import PageWrapper from "../vui/sectinos/PageWrapper.vue";
import version from "../../utils/version";

export default {
    name: 'Settings',
    methods: {version},
    components: { PageWrapper },
    props: {},
    setup(props) {
        const hey = 'Hello From App Settings';

        return {
            hey
        }
    }
};
//docs
//key shortcuts
//save settings
//active grid, background and so on [if true then add this classes to that specific website body](easy one)
//report bug
//GitHub links { contributing, ideas, stars }
//App version
</script>