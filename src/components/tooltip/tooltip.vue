<template>
    <v-tooltip :bottom="position === 'bottom'" :top="position === 'top'" :left="position === 'start'" :right="position === 'end'">
      <template v-slot:activator="{ props }">
        <span v-bind="props">
          <slot>Hover me</slot>
        </span>
      </template>
      <span>{{ text }}</span>
    </v-tooltip>
  </template>
  
  <script>
  export default {
    name: "RtTooltip",
    props: {
      text: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        default: "bottom", // Options: 'top', 'bottom', 'start', 'end'
        validator: (value) => ["top", "bottom", "start", "end"].includes(value),
      },
    },
  };
  </script>
  
  <style scoped>
  span {
    cursor: pointer;
  }
  </style>
  