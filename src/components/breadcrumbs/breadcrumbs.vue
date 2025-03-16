<template>
    <v-breadcrumbs class="v-breadcrumbs-wrapper" :divider="divider" :items="items">
      <template v-slot:item="{ item }">
        <RtButton :to="item.to" text v-if="item.to">{{ item.text }}</RtButton>
        <span v-else>{{ item.text }}</span>
      </template>
    </v-breadcrumbs>
  </template>
  
  <script>
  import RtButton from '../button/button.vue';
  export default {
    name: "RtBreadcrumbs",
    components: {
      RtButton,
    },
    props: {
      items: {
        type: Array,
        default: () => [
          { text: "Home", to: "/" },
          { text: "Products", to: "/products" },
          { text: "Details", to: null },
        ],
      },
      divider: {
        type: String,
        default: "/",
      },
    },
  };
  </script>
  
  <style scoped>
  .v-breadcrumbs-wrapper {
    padding: 8px;
  }
  
  .v-breadcrumbs-wrapper .v-btn {
    text-transform: none;
    font-size: 14px;
  }
  
  .v-breadcrumbs-wrapper span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
  }
  </style>
  