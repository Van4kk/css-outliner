<template>
    <page-wrapper>
        <template v-if="condition.isElementSelected">
            <div id="css-outliner-element-properties-page-tabs-nav">
                <button :class="{ 'text-white-hover' : activeTab === 'attributes' }" @click="switchTab('proprieties')">Element proprieties</button>
                <button :class="{ 'text-white-hover' : activeTab === 'proprieties' }" @click="switchTab('attributes')">Element attributes</button>
                <span class="css-outliner-element-properties-tabs-glider"
                      :class="{ 'translate-x-full' : activeTab === 'attributes', 'translate-x-0' : activeTab === 'proprieties' }"
                ></span>
            </div>
            <div id="css-outliner-element-properties-page-tabs">
                <div id="css-outliner-element-properties-tab" :class="{ 'css-outliner-element-properties-active-tab' : activeTab === 'proprieties'}">
                    <ElementDetails :properties="condition.properties" :show-info="false" :show-colors="true" />
                </div>
                <div id="css-outliner-element-attributes-tab" :class="{ 'css-outliner-element-properties-active-tab' : activeTab === 'attributes'}">
                    <ElementAttributes :active-element-id="activeElementId" />
                </div>
            </div>
        </template>
        <Welcome v-else />
    </page-wrapper>
<!--    TODO: element css with :hover, :active etc.-->
</template>
<script>
import Welcome from "./Welcome.vue";
import { onMounted, reactive, ref, watch } from "vue";
import ElementDetails from "../../components/vui/sectinos/ElementDetails";
import HtmlElement from "./../../utils/HtmlElement";
import GetCss from "./../../utils/GetCss";
import PageWrapper from "../vui/sectinos/PageWrapper.vue";
import ElementAttributes from "./ElementAttributes.vue";

export default {
    components: { ElementAttributes, PageWrapper, Welcome, ElementDetails },
    props: {
        activeElementId: {
            type: [Number, String],
            default: 0,
        },
    },
    setup(props) {
        const condition = reactive({
            isElementSelected: false,
            properties: null,
            appliedCSS: null,
        });

        const activeTab = ref('proprieties');

        function init() {
            if (!isNaN(props.activeElementId)) {
                const target = document.querySelector('[css-outliner-selected-element]');

                if (!target) return;

                const properties = new HtmlElement(target);

                condition.properties = properties.getAll();
                condition.appliedCSS = new GetCss(target).all();
                condition.isElementSelected = true;
            }
        }

        const switchTab = (tabName) => {
            activeTab.value = tabName;
        }

        watch(() => props.activeElementId, init);

        onMounted(init);

        return {
            condition,
            activeTab,
            switchTab
        }
    }
};
</script>