<template>
  <textarea class="l-textarea"
    :style="{'resize': resize, 'height': currentHeight + 'px' }"
    :placeholder="placeholder"
    :value="value"
    :name="name"
    @input="handleInput"
    @blur="handleBlur"
    @focus="handleFocus"
    :disabled="disabled"
    :readonly="readonly"
    :autofocus="autofocus"
    ref="textarea"
  ></textarea>    
</template>

<script>
import utils from './tx_utils';
export default {
    name: 'l-textarea',
    props: {
        value: String,
        placeholder: String,
        name: String,
        minRow: {
            type: String,
            default: '1',
        },
        maxRow: {
            type: String,
            default: null,
        },
        autofocus: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        autoresize: {
            type: Boolean,
            default: true,
        },
        resize: {
            type: String,
            default: 'none',
            validator(val) {
                return ['none','vertical','horizontal','both'].includes(val);
            },
        },
    },
    data() {
        return {
            currentHeight: 0,
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
            this.$nextTick(() => {
                this.resizeTextarea();
            });
        },
        handleBlur(e) {
            this.$emit('blur', e);
        },
        handleFocus(e) {
            this.$emit('focus', e);
        },
        resizeTextarea() {
            if(!this.autoresize) return;
            this.currentHeight = utils.getHeight(this.$refs.textarea, parseInt(this.minRow), this.maxRow ? parseInt(this.maxRow) : this.maxRow);
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.resizeTextarea();
        });
    },
}
</script>

<style lang="scss" scoped>
$primary: #6190e8;
$default: #ecf5fd;
$border: #c5d9e8;
$fontColor: #3f536e;
$disabled: #eef0f0;
$disabledDark: #b9b9b9;

.l-textarea {
    outline: none;
    -webkit-appearance: none;
    border: 1px solid $primary;
    transition: opacity 0.3s ease-in-out;
    opacity: 0.7;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 5px 5px;
    color: $fontColor;
    width: 100%;
    resize: vertical;
    line-height: 20px;
    font-size: 14px;
    vertical-align: baseline;
    overflow-y: auto;
    height: 52px;

    &:focus, &:hover {
        border-color: $primary;
        opacity: 1;
    }

    &:disabled {
        border-color: $disabledDark;
        background-color: $disabled;
        opacity: 1;

        &:hover {
            border-color: $disabledDark;
        }
    }
}
</style>
