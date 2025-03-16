<template>
    <div class="v-pagination-wrapper">
      <v-pagination
        v-model="currentPage"
        :length="length"
        :total-visible="totalVisible"
        :color="color"
        :rounded="rounded"
        :disabled="disabled"
      />
      <p class="page-info">Current Page: {{ currentPage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "RtPagination",
    props: {
      length: {
        type: Number,
        default: 10, // Total number of pages
      },
      totalVisible: {
        type: Number,
        default: 5, // Number of visible pages in the pagination bar
      },
      color: {
        type: String,
        default: "primary", // Color of the pagination
      },
      rounded: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false, // Whether the pagination is disabled
      },
    },
    data() {
      return {
        currentPage: 1, // Initial page
      };
    },
  };
  </script>
  
  <style scoped>
  .v-pagination-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
  
  .page-info {
    margin-top: 10px;
    font-size: 16px;
    color: #555;
  }
  </style>
  