<template>
    <div class="css-outliner-page-assets-item-box">
        <button @click="copySVGCode(svgProperties.src)"
                class="css-outliner-page-assets-item-box-svg-copy-button"
        >
            <div class="flex flex-col items-center justify-center">
                <span class="group-hover:translate-y-0">
                    <Icon name="copy" class="w-10 h-10" />
                </span>
                <span class="group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">
                    {{ condition.copySVGCode ? 'Copied!' : 'Copy svg code' }}
                </span>
            </div>
        </button>
        <button @click="exportSVG(svgProperties.src, svgProperties.type)"
                class="css-outliner-page-assets-item-box-svg-export-button"
        >
            <span>
                {{ condition.svgExported ? 'SVG exported!' : `Export ${ svgProperties.type }` }}
            </span>
        </button>
    </div>
    <div class="flex flex-row items-center justify-around content-center"
         v-html="svgProperties.src"
    >
    </div>
</template>
<script>
import Icon from "../../vui/Icon.vue";
import { reactive } from "vue";

export default {
    name: 'SVGBox',
    components: { Icon },
    props: {
        svgProperties: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        const condition = reactive({
            copySVGCode: false,
            svgExported: false
        });

        function copySVGCode(text) {
            condition.copySVGCode = true;

            navigator.clipboard.writeText(text);

            setTimeout(() => {
                condition.copySVGCode = false;
            }, 1400);
        }

        function exportSVG(svgCode, type) {
            condition.svgExported = true;

            const blob = new Blob([svgCode], { type: "image/svg+xml" });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");

            a.href = url;
            a.download = `exported_${type}.svg`;
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            setTimeout(() => {
                condition.svgExported = false;
            }, 1400);
        }

        return {
            condition,
            copySVGCode,
            exportSVG
        }
    }
}
</script>
