<template>
    <div id="css-outliner-welcome-wrapper">
        <div id="css-outliner-welcome-content-wrapper">
            <span>
                <Icon name="click" />
            </span>
            <h1>Click an element to see the properties</h1>
        </div>
    </div>
</template>
<script>
import Icon from "../vui/Icon.vue";

export default {
    name: 'Welcome',
    components: { Icon },
    setup() {
        const hey = 'Hello From welcome';

        return {
            hey,
        }
    }
}
//and the list of shortcuts under that cursor icon
</script>