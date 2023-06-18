<template>
    <page-wrapper>
        <template v-if="condition.isElementSelected">
            <div id="css-outliner-element-properties-page-tabs-nav">
                <button :class="{ 'text-white' : activeTab === 'proprieties' }" @click="switchTab('proprieties')">Element proprieties</button>
                <button :class="{ 'text-white' : activeTab === 'attributes' }" @click="switchTab('attributes')">Element attributes</button>
                <span class="css-outliner-element-properties-tabs-glider"></span>
            </div>
            <div id="css-outliner-element-properties-page-tabs">
                <div id="css-outliner-element-properties-tab" :class="{ 'css-outliner-element-properties-active-tab' : activeTab === 'proprieties'}">
                    <ElementDetails :properties="condition.properties" :show-info="false" />
                </div>
                <div id="css-outliner-element-attributes-tab" :class="{ 'css-outliner-element-properties-active-tab' : activeTab === 'attributes'}">
                    <ElementAttributes />
                </div>
            </div>
        </template>
        <Welcome v-else />
    </page-wrapper>
<!--    TODO: element css with :hover, :active etc.-->
<!--    TODO: element colors-->

<!--    TODO: attribute tab-->
<!--    TODO: list of attributes-->
<!--    TODO: ability to add attributes and delete them too-->
</template>
<script>
import Welcome from "./Welcome.vue";
import {onMounted, reactive, ref, watch,} from "vue";
import ElementDetails from "../../components/vui/sectinos/ElementDetails";
import HtmlElement from "./../../utils/HtmlElement";
import GetCss from "./../../utils/GetCss";
import PageWrapper from "../vui/sectinos/PageWrapper.vue";
import ElementAttributes from "./ElementAttributes.vue";

export default {
    components: { ElementAttributes, PageWrapper, Welcome, ElementDetails },
    props: {
        activeElementId: {
            type: Number,
            default: 0
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
            const target = document.querySelector('[selected-element]');

            if (!target) return;

            const properties = new HtmlElement(target);

            condition.properties = properties.getAll();
            condition.appliedCSS = new GetCss(target).all();
            condition.isElementSelected = true;
        }

        const switchTab = (tabName) => {

            console.log(
                "Log before switching \n",
                `tabName = ${tabName}\n`,
                `activeTab.value = ${activeTab.value}\n`
            )

            activeTab.value = tabName;

            console.log(
                `tabName = ${tabName}\n`,
                `activeTab.value = ${activeTab.value}\n`
            )

            const glider = document.querySelector('.css-outliner-element-properties-tabs-glider');
            if (glider) {
                glider.style.transform = 'translateX(0)';
            }
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