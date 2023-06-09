<template>
    <div id="css-outliner-navigation-menu" :class="className">
        <button>Page 1</button>
        <button>Page 2</button>
        <button>Page 3</button>
        <button>Page 4</button>
        <button>Page 5</button>
    </div>
</template>
<script>
export default {
    name: 'Navigation',
    props: {
        className: {
            type: String,
            default: ''
        },
    }
};
</script>