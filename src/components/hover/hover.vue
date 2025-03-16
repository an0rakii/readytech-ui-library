<template>
    <v-hover
      v-slot:default="{ isHovering, props }"
      :open-delay="openDelay"
      :close-delay="closeDelay"
    >
      <v-card
        v-bind="props"
        :class="{
          'hovered': isHovering,
          'normal': !isHovering
        }"
        class="pa-4"
        outlined
      >
        <v-card-title>{{ isHovering ? 'Hovered' : 'Normal' }}</v-card-title>
        <v-card-subtitle>{{ isHovering ? 'You are hovering over the card!' : 'Hover over the card to see the effect.' }}</v-card-subtitle>
      </v-card>
    </v-hover>
  </template>
  
  <script>
  export default {
    name: 'RtHover',
    props: {
      openDelay: {
        type: Number,
        default: 0,
      },
      closeDelay: {
        type: Number,
        default: 0,
      },
    },
  };
  </script>
  
  <style scoped>
  .hovered {
    background-color: #1976d2;
    color: white;
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out, background-color 0.3s ease;
  }
  
  .normal {
    background-color: #f5f5f5;
    color: black;
    transform: scale(1);
    transition: transform 0.3s ease-in-out, background-color 0.3s ease;
  }
  
  .v-card {
    width: 100%;
    cursor: pointer;
  }
  </style>
  