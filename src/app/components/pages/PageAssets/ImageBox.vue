<template>
    <div class="css-outliner-page-assets-item-box overflow-hidden">
        <span class="css-outliner-page-assets-item-box-grid-1 overflow-hidden">
            <div class="flex items-center justify-center h-full">
                <Icon name="image" class="w-9 h-9" />
            </div>
        </span>
        <a class="css-outliner-page-assets-item-box-grid-2 overflow-hidden"
           :href="imageProperties.src"
           target="_blank"
        >
            <div class="flex items-center justify-center h-full">
                <Icon name="link" class="w-9 h-9" />
            </div>
        </a>
        <span class="css-outliner-page-assets-item-box-grid-full-lower-row overflow-hidden">
            <div class="flex flex-col items-center justify-center overflow-hidden">
                <span class="group-hover:translate-y-0 text-base overflow-hidden">
                    Size
                </span>
                <span class="group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible overflow-hidden">
                    <b>{{ imageProperties.width }}</b>x<b>{{ imageProperties.height }}</b>
                </span>
            </div>
        </span>
        <button @click="exportImage(imageProperties.src, imageProperties.type)"
                class="css-outliner-page-assets-item-box-grid-button overflow-hidden"
        >
            <span>
                {{ condition.imageExported ? 'Image exported!' : `Export ${ imageProperties.type }` }}
            </span>
        </button>
    </div>
    <img :src="imageProperties.src"
         :alt="imageProperties.alt"
         :width="imageProperties.width"
         :height="imageProperties.height"
         class="w-full h-full object-cover"
    />
</template>
<script>
import { inject, reactive } from "vue";
import Icon from "../../vui/Icon.vue";

export default {
    name: 'ImageBox',
    components: { Icon },
    props: {
        imageProperties: {
            type: Object,
            required: true,
        }
    },
    setup() {
        const condition = reactive({
            imageExported: false
        });

        // add warnings for not available sources
        // use fetch
        function exportImage(imageSource, type) {
            const img = new Image();
            img.src = imageSource;
            img.crossOrigin = "anonymous";

            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const context = canvas.getContext("2d");
                context.drawImage(img, 0, 0);

                canvas.toBlob(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `exported_${type}.${imageSource.split('.').pop()}`;
                    a.style.display = "none";
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);

                    setTimeout(() => {
                        condition.imageExported = false;
                    }, 1400);
                });
            };
        }

        const parent = inject('downloadAsset');

        const callParent = (asset) => {
            parent(asset);
        }

        return {
            condition,
            exportImage,
        }
    }
}
</script>