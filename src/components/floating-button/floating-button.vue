<template>
    <v-fab-transition>
      <RtButton
        class="v-fab-wrapper"
        :icon="icon"
        :color="color"
        :size="size"
        :elevation="elevation"
        :href="href"
        :offset="offset"
        :absolute="absolute"
        fab
      >
        <RtIcon v-if="icon" :icon="icon">{{ icon }}</RtIcon>
        <slot></slot>
      </RtButton>
    </v-fab-transition>
  </template>
  
  <script>
  import RtIcon from '../icon/icon.vue';
  import RtButton from '../button/button.vue';
  export default {
    name: "RtFloatingButton",
    components: {
      RtIcon,
      RtButton,
    },
    props: {
      icon: {
        type: String,
        default: '',
      },
      absolute: {
        type: Boolean,
        default: false,
      },
      offset: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: "primary",
      },
      icon: {
        type: String,
        default: "",
      },
      size: {
        type: String,
        default: "large", // Options: x-small, small, default, large, x-large
      },
      elevation: {
        type: [String, Number],
        default: 4,
      },
      href: {
        type: String,
        default: "",
      },
    },
  };
  </script>
  
  <style scoped>
  .v-fab-wrapper {
    position: fixed;
    bottom: 16px;
    right: 16px;
  }
  </style>
  