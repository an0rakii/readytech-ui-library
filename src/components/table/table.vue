<template>
    <v-container>
      <v-table
        :headers="headers"
        :items="items"
        item-key="name"
        v-model:sort-by="sortBy"
        v-model:sort-desc="sortDesc"
      >
        <template #item.name="{ item }">
          <v-chip color="primary" text-color="white">{{ item.name }}</v-chip>
        </template>
      </v-table>
  
      <v-pagination v-model="page" :length="totalPages" @input="loadPage" />
    </v-container>
  </template>
  
  <script>
  export default {
    name: "RtTable",
    data() {
      return {
        page: 1,
        items: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          }
        ],
        totalItems: 50,
        itemsPerPage: 10,
        sortBy: "name",
        sortDesc: false,
        headers: [
          { text: "Name", align: "start", key: "name" },
          { text: "Age", align: "start", key: "age" },
          { text: "City", align: "start", key: "city" },
        ],
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
      },
    },
    methods: {
      loadPage() {
        const start = (this.page - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        this.items = this.generateItems().slice(start, end);
      },
      generateItems() {
        const names = ["John", "Jane", "Alice", "Bob", "Charlie"];
        const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
        let items = [];
        for (let i = 0; i < this.totalItems; i++) {
          items.push({
            name: names[i % names.length],
            age: Math.floor(Math.random() * 60) + 20,
            city: cities[i % cities.length],
          });
        }
        return items;
      },
    },
    mounted() {
      this.loadPage(); // Initial load
    },
  };
  </script>
  
  <style scoped>
  .v-table {
    margin-bottom: 16px;
  }
  
  .v-pagination {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
  </style>
  