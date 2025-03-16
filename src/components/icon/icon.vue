<!-- RtIcon.vue -->
<template>
    <v-icon :size="size" :color="color" :class="customClass" :icon="icon"></v-icon>
  </template>
  
  <script>
  export default {
    name: 'RtIcon',
    props: {
      // Icon name to display (e.g., 'mdi-home')
      icon: {
        type: String,
        required: true,
      },
      // Optional size for the icon (e.g., '24', '36', '48', etc.)
      size: {
        type: String,
        default: '24',
      },
      // Optional color for the icon (e.g., 'red', 'blue', 'primary', etc.)
      color: {
        type: String,
        default: '',
      },
      // Optional custom class to apply extra styles
      customClass: {
        type: String,
        default: '',
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: You can add styles here for the icon */
  </style>
  