<template>
    <label class=""
           :class="labelClasses"
           :for="inputName"
    >{{ labelText }}</label>
    <input class=""
           :class="inputClasses"
           :id="inputId"
           :name="inputName"
           :type="inputType"
    />
</template>
<script>

export default {
    name: 'InputText',
    props: {
        labelClasses: {
            type: String,
            default: ''
        },
        labelText: {
            type: String,
            required: true
        },
        inputClasses: {
            type: String,
            default: ''
        },
        inputId: {
            type: String,
            default: ''
        },
        inputName: {
            type: String,
            required: true
        },
        inputType: {
            type: String,
            default: 'text',
            validator: (type) => ['text', 'email', 'hidden', 'number', 'password', 'tel', 'search'].includes(type)
        },
    }
}
</script>