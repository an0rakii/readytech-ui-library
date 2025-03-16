<template>
    <v-rating
      v-bind="$props"
      @update:modelValue="$emit('update:modelValue', $event)"
    >
    </v-rating>

  </template>
  
  <script>
  export default {
    name: 'RtRatings',
    props: {
      modelValue: {
        type: Number,
        default: 0,
      },
      max: {
        type: Number,
        default: 5,
      },
      color: {
        type: String,
        default: 'primary',
      },
      backgroundColor: {
        type: String,
        default: 'grey lighten-2',
      },
      size: {
        type: String,
        default: '24px',
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      halfIncrements: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:modelValue'],
  };
  </script>
  
  <style scoped>
  /* Add any custom styles for the RtRatings component here */
  </style>