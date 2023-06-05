<template>
    <div id="css-outliner-svg-error-modal-wrapper">
        <div id="css-outliner-svg-error-modal" :class="{'hide': isModalHidden}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
            </svg>
            <span id="css-outliner-svg-error-modal-title">Oops !</span>
            <p id="css-outliner-svg-error-modal-message">Icon named <span>{{ name }}</span> not found.</p>
            <div id="css-outliner-svg-error-modal-button" role="button" @click="closeModal">Close</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SvgNotFound',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isModalHidden: false
        };
    },
    methods: {
        closeModal() {
            this.isModalHidden = true;
        }
    },
};
</script>