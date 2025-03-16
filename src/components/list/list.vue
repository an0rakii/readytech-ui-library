<template>
    <v-list v-bind="$attrs">
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :value="item.value"
        @click="onItemClick(item)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle v-if="item.subtitle">{{ item.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-icon v-if="item.icon">
          <RtIcon :icon="item.icon" />
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </template>
  
  <script>
  import RtIcon from '../icon/icon.vue';
  export default {
    name: "RtList",
    components: { RtIcon },
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
    emits: ["item-click"],
    methods: {
      onItemClick(item) {
        this.$emit("item-click", item);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>
  