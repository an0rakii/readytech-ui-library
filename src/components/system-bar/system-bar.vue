<template>
    <v-system-bar :color="color" :elevated="elevated" :dark="dark" height="32">
      <template v-if="message">
        <span class="system-bar-message">{{ message }}</span>
      </template>
      <slot></slot>
    </v-system-bar>
  </template>
  
  <script>
  export default {
    name: "RtSystemBar",
    props: {
      color: {
        type: String,
        default: "primary", // Background color of the system bar
      },
      dark: {
        type: Boolean,
        default: false, // Determines if the system bar uses dark text/icons
      },
      elevated: {
        type: Boolean,
        default: false, // Adds elevation to the system bar
      },
      message: {
        type: String,
        default: "", // Optional text to display on the system bar
      },
    },
  };
  </script>
  
  <style scoped>
  .system-bar-message {
    color: white;
    font-size: 14px;
    margin-left: 16px;
  }
  </style>
  