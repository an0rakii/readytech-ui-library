<template>
    <v-sheet 
      :elevation="elevation" 
      :color="color" 
      class="v-sheet-wrapper ma-2 pa-7"
      :rounded="rounded"
    >
      <slot />
    </v-sheet>
  </template>
  
  <script>
  export default {
    name: "RtSheet",
    props: {
      rounded: {
        type: Boolean,
        default: false,
      },
      elevation: {
        type: [String, Number],
        default: 2,
      },
      color: {
        type: String,
        default: "grey lighten-3",
      },
    },
  };
  </script>
  
  <style scoped>
  .v-sheet-wrapper {
    padding: 16px;
    max-width: 400px;
    margin: auto;
    text-align: center;
  }
  </style>
  