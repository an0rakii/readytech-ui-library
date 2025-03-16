<template>
    <v-color-picker
      v-bind="$attrs"
      v-model="selectedColor"
      :canvas-height="canvasHeight"
      :disabled="disabled"
      :elevation="elevation"
    ></v-color-picker>
  </template>
  
  <script>
  export default {
    name: "RtColorPicker",
    props: {
      elevation: {
        type: Number,
        default: 0,
      },
      modelValue: {
        type: String,
        default: "#000000",
      },
      canvasHeight: {
        type: [Number, String],
        default: 150,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    emits: ["update:modelValue"],
    watch: {
      modelValue: {
        handler(newVal) {
          this.selectedColor = newVal;
        },
        immediate: true,
      },
    },
    computed: {
      selectedColor: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit("update:modelValue", value);
        },
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles if required */
  </style>
  