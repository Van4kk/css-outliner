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
<script lang="ts">
import {ref, shallowReactive, watch, watchEffect} from 'vue';
import {saveAs} from 'file-saver';
import JSZip from 'jszip';
import {pageAssetsOptions} from "@utils/data";
import {AssetInfo} from "@utils/types";
import PageWrapper from "@vui/sectinos/PageWrapper.vue";
import DropDown from "@vui/DropDown.vue";
import Spinner from "@vui/Spinner.vue";
import SVGBox from "./SVGBox.vue";
import ImageBox from "./ImageBox.vue";
import VideoBox from "./VideoBox.vue";

export default {
    name: 'PageAssets',
    components: {VideoBox, ImageBox, SVGBox, Spinner, DropDown, PageWrapper},
    setup() {
        const assets = ref<AssetInfo[]>([]);
        const dropDownOptions = pageAssetsOptions;
        const condition = shallowReactive({
            //for the filter
            selectedType: 'All Types',
            loading: false,
        });

        const getAssets = () => {
            const assetsList = Array.from(document.querySelectorAll('img, svg, video')) as (HTMLImageElement | SVGElement | HTMLVideoElement)[];
            const seenImageSources = new Set<string>();

            assetsList.forEach((asset) => {
                let assetInfo: AssetInfo = {type: 'image'}; // Default type

                if (asset.tagName.toLowerCase() === 'img') {
                    const imgAsset = asset as HTMLImageElement;

                    // Skip image if the source is already seen
                    if (seenImageSources.has(imgAsset.src)) return;
                    seenImageSources.add(imgAsset.src);

                    assetInfo.type = 'image';
                    assetInfo.src = imgAsset.src;
                    assetInfo.alt = imgAsset.alt;
                    assetInfo.width = imgAsset.width;
                    assetInfo.height = imgAsset.height;
                } else if (asset.tagName.toLowerCase() === 'svg') {
                    assetInfo.type = 'svg';
                    assetInfo.src = asset.outerHTML;
                } else if (asset.tagName.toLowerCase() === 'video') {
                    const videoAsset = asset as HTMLVideoElement;
                    assetInfo.type = 'video';
                    assetInfo.sources = Array.from(videoAsset.querySelectorAll('source')).map((source) => source.src);
                    assetInfo.width = videoAsset.videoWidth;
                    assetInfo.height = videoAsset.videoHeight;
                    assetInfo.duration = videoAsset.duration;
                    assetInfo.isGif = false;

                    // Optional: Check if it's a gif (based on file extension or other logic)
                    // if (videoAsset.src.includes('.gif')) {
                    //     assetInfo.type = 'gif';
                    //     assetInfo.isGif = true;
                    // }
                }

                assets.value.push(assetInfo);
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