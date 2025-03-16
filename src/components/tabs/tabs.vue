<template>
    <v-tabs v-model="selectedTab" :color="color" :dark="dark">
      <v-tab v-for="(tab, index) in tabs" :key="index">{{ tab }}</v-tab>
      <v-tab-item v-for="(tab, index) in tabs" :key="index">
        <v-card flat>
          <v-card-text>{{ tab }} Content</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </template>
  
  <script>
  export default {
    name: "RtTabs",
    props: {
      color: {
        type: String,
        default: "primary", // Color of the active tab
      },
      dark: {
        type: Boolean,
        default: false, // Enables dark theme for the tabs
      },
      tabs: {
        type: Array,
        default: () => ["Tab 1", "Tab 2", "Tab 3"], // Array of tab names
      },
    },
    data() {
      return {
        selectedTab: 0, // Keeps track of the currently selected tab
      };
    },
  };
  </script>
  
  <style scoped>
  @import "./tabs.css";
  .v-tabs {
    margin-bottom: 16px;
  }
  
  .v-tab {
    font-size: 16px;
    text-transform: uppercase;
  }
  
  .v-card-text {
    font-size: 14px;
    color: #333;
  }
  </style>
  