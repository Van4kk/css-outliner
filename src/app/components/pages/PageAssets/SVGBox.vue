<template>
    <div class="group-hover:opacity-100 absolute text-white bg-horizon/80 h-full w-full left-0 right-0 bottom-0 top-0 opacity-0 flex flex-col justify-center items-center">
        <span>{{ svgProperties.type }}</span>
        <span>{{ svgProperties.src }}</span>
        <span>{{ svgProperties.alt }}</span>
    </div>
    <span v-html="svgProperties.src"></span>
</template>
<script>

export default {
    name: 'SVGBox',
    props: {
        svgProperties: {
            type: Object,
            required: true,
        }
    },
}
</script>