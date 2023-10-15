<template>
    <div class="group-hover:opacity-100 absolute text-white bg-horizon/80 h-full w-full left-0 right-0 bottom-0 top-0 opacity-0 flex flex-col justify-center items-center">
        <span>{{ videoProperties.type }}</span>
        <span>{{ videoProperties.src }}</span>
        <span>{{ videoProperties.alt }}</span>
    </div>
    Sources:
    <ul>
        <li v-for="(source, sourceIndex) in videoProperties.sources" :key="sourceIndex">{{ source }}</li>
    </ul>
</template>
<script>

// preview
// source
// type icon film
// alt

export default {
    name: 'VideoBox',
    props: {
        videoProperties: {
            type: Object,
            required: true,
        }
    },
}
</script>