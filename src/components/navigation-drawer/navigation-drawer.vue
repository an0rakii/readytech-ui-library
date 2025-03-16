<template>
    <v-navigation-drawer
      v-model="isOpen"
      :temporary="temporary"
      :right="right"
      :width="width"
      :color="color"
      :rail="rail"
      :floating="floating"
      :location="location"
      app
    >
      <template v-slot:prepend>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-divider></v-divider>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :title="item.title"
          :href="item.href"
          class="v-navigation-drawer-item"
        >
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    name: "RtNavigationDrawer",
    props: {
      location: {
        type: String,
        default: "left",
      },
      floating: {
        type: Boolean,
        default: false,
      },
      rail: {
        type: Boolean,
        default: false,
      },
      temporary: {
        type: Boolean,
        default: false,
      },
      right: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: "primary",
      },
      width: {
        type: [String, Number],
        default: 256,
      },
      title: {
        type: String,
        default: "Navigation",
      },
      items: {
        type: Array,
        default: () => [
          { title: "Home", href: "/", icon: "mdi-home" },
          { title: "About", href: "/about", icon: "mdi-information" },
          { title: "Contact", href: "/contact", icon: "mdi-phone" },
        ],
      },
    },
    data() {
      return {
        isOpen: true,
      };
    },
  };
  </script>
  
  <style scoped>
  @import "./navigation-drawer.css";
  .v-navigation-drawer-item {
    font-size: 16px;
  }
  </style>
  