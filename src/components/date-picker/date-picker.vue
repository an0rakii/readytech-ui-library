<template>
    <v-date-picker
      v-bind="$attrs"
      :color="color"
      :min="minDate"
      :max="maxDate"
      :disabled="disabled"
      :locale="locale"
      :elevation="elevation"
      :show-adjacent-months="showAdjacentMonths"
    />
  </template>
  
  <script>
  export default {
    name: "RtDatePicker",
    props: {
      color: {
        type: String,
        default: "primary",
      },
      elevation: {
        type: Number,
        default: 0,
      },
      modelValue: {
        type: String,
        default: "",
      },
      minDate: {
        type: String,
        default: "",
      },
      maxDate: {
        type: String,
        default: "",
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      locale: {
        type: String,
        default: "en",
      },
      showAdjacentMonths: {
        type: Boolean,
        default: false,
      },
    },
    emits: ["update:modelValue"],
    computed: {
      selectedDate: {
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
  