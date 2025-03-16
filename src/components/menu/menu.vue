<template>
    <div>
      <v-menu
        v-model="isMenuOpen"
        :close-on-content-click="false"
        :offset-y="offsetY"
        :z-index="zIndex"
        :location="location"
        transition="scale-transition"
        class="v-menu-wrapper"
      >
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" color="primary">Open Menu</v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="onSelectItem(item)"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  
  <script>
  export default {
    name: "RtMenu",
    props: {
      items: {
        type: Array,
        default: () => ["Option 1", "Option 2", "Option 3"],
      },
      offsetY: {
        type: Boolean,
        default: true,
      },
      zIndex: {
        type: Number,
        default: 10,
      },
      location: {
        type: String,
        default: 'center', // Default density
        validator(value) {
          return ['top', 'bottom', 'start', 'end', 'center'].includes(value);
        }
      },
    },
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      onSelectItem(item) {
        this.$emit("itemSelected", item);
        this.isMenuOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .v-menu-wrapper {
    display: inline-block;
  }
  
  .v-list-item-title {
    font-weight: bold;
  }
  </style>
  