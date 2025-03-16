<template>
    <v-stepper v-bind="$attrs" v-model="step" :vertical="vertical">
      <slot></slot>
    </v-stepper>
  </template>
  
  <script>
  export default {
    name: "RtStepper",
    props: {
      modelValue: {
        type: Number,
        default: 0,  // Default step is 0 (first step)
      },
      vertical: {
        type: Boolean,
        default: false,  // Default to horizontal stepper
      },
    },
    emits: ["update:modelValue"],
    computed: {
      step: {
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
  /* Add any custom styles if needed */
  </style>
  