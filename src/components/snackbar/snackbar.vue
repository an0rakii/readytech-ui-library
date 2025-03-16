<template>
    <div class="text-center ma-2">
      <v-btn :color="buttonColor" @click="snackbar = true">{{ buttonText }}</v-btn>
      <v-snackbar v-model="snackbar" :timeout="timeout" :color="snackbarColor">
        {{ message }}
  
        <template v-slot:actions>
          <v-btn :color="actionButtonColor" variant="text" @click="snackbar = false">
            {{ actionButtonText }}
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </template>
  
  <script>
  export default {
    name: "RtSnackbar",
    props: {
      message: {
        type: String,
        default: "Hello, I'm a snackbar!",
      },
      timeout: {
        type: Number,
        default: 6000,
      },
      buttonText: {
        type: String,
        default: "Open Snackbar",
      },
      buttonColor: {
        type: String,
        default: "primary",
      },
      snackbarColor: {
        type: String,
        default: "",
      },
      actionButtonText: {
        type: String,
        default: "Close",
      },
      actionButtonColor: {
        type: String,
        default: "pink",
      },
    },
    data() {
      return {
        snackbar: false,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>
  