<template>
    <div class="group-hover:opacity-100 absolute text-white bg-horizon/80 h-full w-full left-0 right-0 bottom-0 top-0 opacity-0 flex flex-col justify-center items-center">
        <span>{{ iconProperties.type }}</span>
        <span>{{ iconProperties.src }}</span>
        <span>{{ iconProperties.alt }}</span>
    </div>
    {{ iconProperties.src }}
</template>
<script>

export default {
    name: 'IconBox',
    props: {
        iconProperties: {
            type: Object,
            required: true,
        }
    },
}
</script>