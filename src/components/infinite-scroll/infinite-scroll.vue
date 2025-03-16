<template>
    <v-infinite-scroll
      v-model:loading="loading"
      :items-per-page="itemsPerPage"
      @load="loadMoreItems"
    >
      <v-list>
        <v-list-item-group v-if="items.length">
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-content>{{ item }}</v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item v-if="loading">
          <v-list-item-content>
            <v-skeleton-loader type="list-item" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-infinite-scroll>
  </template>
  
  <script>
  export default {
    name: "RtInfiniteScroll",
    data() {
      return {
        loading: false,
        items: [],
        itemsPerPage: 10,
        totalItems: 50,
      };
    },
    methods: {
      loadMoreItems() {
        if (this.items.length < this.totalItems) {
          this.loading = true;
          setTimeout(() => {
            this.items = [
              ...this.items,
              ...Array.from({ length: this.itemsPerPage }, (_, index) => `Item ${this.items.length + index + 1}`),
            ];
            this.loading = false;
          }, 1000);
        }
      },
    },
    mounted() {
      this.loadMoreItems(); // Initial load
    },
  };
  </script>
  
  <style scoped>
  .v-list-item {
    margin-bottom: 8px;
  }
  .v-list-item-content {
    font-size: 16px;
  }
  </style>
  