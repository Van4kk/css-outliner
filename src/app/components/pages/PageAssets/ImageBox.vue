<template>
    <div class="group-hover:opacity-100 absolute text-white bg-horizon/80 left-0 right-0 bottom-0 top-0 h-full opacity-0 w-full grid grid-cols-4 grid-rows-2">
        <span class="col-span-2 row-span-1 rounded border border-transparent mb-0.5 mr-0.5 ml-1 mt-1 hover:bg-primary-horizon/60 will-change-auto">{{ imageProperties.type }}</span>
        <span class="col-span-2 row-span-1 rounded border border-transparent mb-0.5 mr-1 ml-0.5 mt-1 hover:bg-primary-horizon/60 will-change-auto">{{ imageProperties.src }}</span>
        <span class="col-span-2 row-span-1 rounded border border-transparent mb-0.5 mr-0.5 ml-1 mt-0.5 hover:bg-primary-horizon/60 will-change-auto">{{ imageProperties.alt }}</span>
        <span class="col-span-2 row-span-1 rounded border border-transparent mb-0.5 mr-1 ml-0.5 mt-0.5 hover:bg-primary-horizon/60 will-change-auto">{{ imageProperties.alt }}</span>
        <button @click="callParent(imageProperties)"
                class="col-span-4 row-span-1 rounded border border-transparent bg-primary-horizon/40 mb-1 mr-1 ml-1 mt-0.5 hover:bg-primary-horizon/70"
        >
            Export {{ imageProperties.type }}
        </button>
    </div>
    <img :src="imageProperties.src"
         :alt="imageProperties.alt"
         class="w-full h-full object-cover"
    />
</template>
<script>
import { inject } from "vue";

export default {
    name: 'ImageBox',
    props: {
        imageProperties: {
            type: Object,
            required: true,
        }
    },
    setup() {
        const parent = inject('downloadAsset')

        const callParent = (asset) => {
            parent(asset);
        }

        return {
            callParent,
        }
    }
}
</script>