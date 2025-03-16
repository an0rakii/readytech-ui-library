<template>
    <v-switch
      v-model="currentValue"
      :label="label"
      :disabled="disabled"
      :color="color"
      :hide-details="hideDetails"
      @change="$emit('update:modelValue', currentValue)"
    />
  </template>
  
  <script>
  export default {
    name: "RtSwitch",
    props: {
      modelValue: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: "Toggle option",
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: "primary",
      },
      hideDetails: {
        type: Boolean,
        default: true,
      },
    },
    computed: {
      currentValue: {
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
  /* Add optional styles if necessary */
  </style>
  