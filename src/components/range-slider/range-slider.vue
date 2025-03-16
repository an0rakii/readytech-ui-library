<template>
    <v-range-slider
      v-bind="$attrs"
      v-model="value"
      :label="label"
      :min="min"
      :max="max"
      :step="step"
      :thumb-label="thumbLabel"
      :tick-size="ticksSize"
      :show-ticks="showTicks"
      :track-fill-color="trackFillColor"
      :track-color="trackColor"
      :disabled="disabled"
      :error="error"
      :aria-label="label"
    />
  </template>
  
  <script>
  export default {
    name: "RtRangeSlider",
    props: {
      modelValue: {
        type: Array,
        default: () => [0, 50],
        validator(value) {
          // Ensure that the modelValue is an array with two numbers (min, max values)
          return Array.isArray(value) && value.length === 2 && value.every(val => typeof val === 'number');
        },
      },
      label: {
        type: String,
        default: "Range Slider",
      },
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
      thumbLabel: {
        type: [Boolean, String],
        default: false, // Options: false, true, 'always'
        validator(value) {
          // Only allow valid options for thumbLabel
          return [false, true, 'always'].includes(value);
        },
      },
      showTicks: {
        type: Boolean,
        default: false,
      },
      ticksSize: {
        type: Number,
        default: 4,
      },
      trackFillColor: {
        type: String,
        default: null, // Could also allow a color code or name
      },
      trackColor: {
        type: String,
        default: null,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      error: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      value: {
        get() {
          return this.modelValue;
        },
        set(val) {
          this.$emit("update:modelValue", val);
        },
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Custom styles can be added here if needed */
  </style>
  