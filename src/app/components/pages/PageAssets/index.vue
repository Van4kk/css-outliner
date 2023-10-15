<template>
    <page-wrapper>
        <div id="css-outliner-page-assets">
            <div id="css-outliner-page-assets-actions">
                <!-- I'll make it work later, because i need to refactor the getAssets function -->
                <DropDown :dropdown-width="'w-[148.34500px]'"
                          :options="dropDownOptions"
                          :default="dropDownOptions[0].name"
                          :options-width="'w-[148.34500px]'"
                          :icon="true"
                />
                <button id="css-outliner-page-assets-download-all"
                        class="group"
                        @click="downloadAll"
                >
                    <span v-if="!condition.loading">Download all</span>
                    <Spinner v-else :loading="condition.loading" />
                </button>
            </div>
            <div id="css-outliner-page-assets-grid-wrapper">
                <div v-for="(asset, index) in assets"
                     :key="index"
                     class="group css-outliner-page-assets-item relative overflow-hidden m-auto w-[146.35px] h-[146.35px]"
                >
                    <ImageBox v-if="asset.type === 'image'" :image-properties="asset" />
                    <SVGBox v-if="asset.type === 'svg'" :svg-properties="asset" />
                    <VideoBox v-if="asset.type === 'video'" :video-properties="asset" />
                </div>
            </div>
        </div>
    </page-wrapper>
    <!--  TODO: dropdown with sort -->
    <!--  TODO: export all assets -->
    <!--  TODO: on hover appear the name with `..` and the ability to export only this image -->
    <!--  TODO: show the size of the image -->
</template>
<script>
import { ref, shallowReactive, watch, watchEffect } from 'vue';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { pageAssetsOptions } from "../../../utils/data";
import PageWrapper from "../../vui/sectinos/PageWrapper.vue";
import DropDown from "../../vui/DropDown.vue";
import Spinner from "../../vui/Spinner.vue";
import SVGBox from "./SVGBox.vue";
import ImageBox from "./ImageBox.vue";
import VideoBox from "./VideoBox.vue";

export default {
    name: 'PageAssets',
    components: { VideoBox, ImageBox, SVGBox, Spinner, DropDown, PageWrapper },
    setup() {
        const assets = ref([]);
        const dropDownOptions = pageAssetsOptions;
        const condition = shallowReactive({
            //for the filter
            selectedType: 'All Types',
            loading: false,
        });

        const getAssets = () => {
            const assetsList = Array.from(document.querySelectorAll('img, svg, video'));

            assets.value = assetsList.map(asset => {
                let assetInfo = {};
                if (asset.tagName.toLowerCase() === 'img') {
                    assetInfo.type = 'image';
                    assetInfo.src = asset.src;
                    assetInfo.alt = asset.alt;
                    assetInfo.width = asset.width;
                    assetInfo.height = asset.height;
                } else if (asset.tagName.toLowerCase() === 'svg') {
                    assetInfo.type = 'svg';
                    assetInfo.src = asset.outerHTML;
                } else if (asset.tagName.toLowerCase() === 'video') {
                    assetInfo.type = 'video';
                    assetInfo.sources = Array.from(asset.querySelectorAll('source')).map(source => source.src);
                    assetInfo.width = asset.videoWidth;
                    assetInfo.height = asset.videoHeight;
                    assetInfo.duration = asset.duration;
                    assetInfo.isGif = false;
                    // if (assetInfo.src.includes('.gif')) {
                    //     assetInfo.type = 'gif';
                    //     assetInfo.isGif = false;
                    // }
                }

                return assetInfo;
            });
        };

        function downloadAsset(asset) {
            condition.loading = true;

            setTimeout(() => {
                condition.loading = false;
            }, 2000);
        }

        function downloadAll() {
            condition.loading = true;
            console.log(assets)

            // if (false) {
            //     //when the jos is done set the loading to false
            //     condition.loading = false;
            // }
            setTimeout(() => {
                condition.loading = false;
            }, 2000);
        }

        console.log(assets)

        watchEffect(getAssets);

        return {
            condition,
            assets,
            dropDownOptions,
            downloadAsset,
            downloadAll
        }
    }
}
</script>