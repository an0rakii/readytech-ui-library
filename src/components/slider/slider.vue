<template>
    <v-slider
      v-bind="$attrs"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      :readonly="readonly"
      :thumb-label="thumbLabel"
      :thumb-size="thumbSize"
      :direction="direction"
      :color="colors"
      :hide-details="true"
      :label="label"
      :tick-size="ticksSize"
      :show-ticks="showTicks"
      :icons="icons"
      :append-icon="appendIcon"
      :prepend-icon="prependIcon"
      v-model="sliderValue"
      @click:append="add"
      @click:prepend="minus"
    />
  </template>
  
  <script>
  export default {
    name: 'RtSlider',
    props: {
      min: {
        type: Number,
        default: 0,
      },
      max: {
        type: Number,
        default: 100,
      },
      step: {
        type: Number,
        default: 1,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      thumbLabel: {
        type: String,
        validator(value) {
            // Ensure the value is one of 'default', 'always', or 'hover'
            return ['default', 'always', 'hover'].includes(value);
        },
        default: 'default',
        },
      thumbSize: {
        type: Number,
        default: 16,
      },
      showTicks: {
        type: Boolean,
        default: false,
      },
      ticksSize: {
        type: Number,
        default: 4,
      },
      direction: {
        type: String,
        default: 'horizontal',
      },
      colors: {
        type: String,
        default: 'primary',
      },
      icons: {
        type: Object,
        default: () => ({}),
      },
      label: {
        type: String,
        default: '',
      },
      appendIcon: {
        type: String,
        default: '',
      },
      prependIcon: {
        type: String,
        default: '',
      },
      value: { // Allow value to be passed in for v-model binding
        type: Number,
        default: 0,
      },
    },
    data() {
        return {
        sliderValue: this.value, // Initial slider value
        };
    },
    watch: {
        sliderValue(newValue) {
        // Sync the slider value back to the parent via v-model
        this.$emit('update:value', newValue);
        },
    },
    methods: {
        add() {
        // Increment value by step
        const newValue = Math.min(this.sliderValue + this.step, this.max);
        this.sliderValue = newValue;
        },
        minus() {
        // Decrement value by step
        const newValue = Math.max(this.sliderValue - this.step, this.min);
        this.sliderValue = newValue;
        },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Add any custom styling if needed */
  </style>
  