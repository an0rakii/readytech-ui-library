<template>
    <div>
      <v-btn color="primary" @click="toggleOverlay">Toggle Overlay</v-btn>
      <v-overlay :value="isActive" :z-index="zIndex" class="v-overlay-wrapper">
        <v-container class="overlay-content">
          <slot>Overlay Content Goes Here</slot>
          <v-btn color="red" @click="toggleOverlay">Close</v-btn>
        </v-container>
      </v-overlay>
    </div>
  </template>
  
  <script>
  export default {
    name: "Overlay",
    props: {
      zIndex: {
        type: Number,
        default: 10,
      },
    },
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      toggleOverlay() {
        this.isActive = !this.isActive;
      },
    },
  };
  </script>
  
  <style scoped>
  .v-overlay-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .overlay-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  </style>
  