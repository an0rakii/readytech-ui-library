<template>
    <v-tooltip bottom>
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="primary">
          {{ buttonText }}
        </v-btn>
      </template>
      <span>{{ tooltipText }}</span>
    </v-tooltip>
  </template>
  
  <script>
  export default {
    name: "RtTooltip",
    props: {
      buttonText: {
        type: String,
        default: "Hover over me",
      },
      tooltipText: {
        type: String,
        default: "This is the tooltip text!",
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styling for the tooltip button (optional) */
  .v-btn {
    margin: 20px;
  }
  </style>
  