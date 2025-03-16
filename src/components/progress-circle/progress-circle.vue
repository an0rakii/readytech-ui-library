<template>
    <v-progress-circular
      :size="size"
      :width="width"
      :value="value"
      :rotate="rotate"
      :color="color"
      :indeterminate="indeterminate"
      :buffer="buffer"
    >
      <slot></slot>
    </v-progress-circular>
  </template>
  
  <script>
  export default {
    name: 'RtProgressCircle',
    props: {
      size: {
        type: [String, Number],
        default: 40, // Size of the progress circle
      },
      width: {
        type: [String, Number],
        default: 4, // Width of the progress circle stroke
      },
      value: {
        type: [Number, String],
        default: 30, // Progress value (0 to 100)
      },
      rotate: {
        type: Number,
        default: 0, // Rotate the progress circle
      },
      color: {
        type: String,
        default: 'primary', // Color of the progress circle
      },
      indeterminate: {
        type: Boolean,
        default: false, // Whether the progress is indeterminate (animated)
      },
      buffer: {
        type: Number,
        default: 100, // Buffer value for indeterminate mode
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  