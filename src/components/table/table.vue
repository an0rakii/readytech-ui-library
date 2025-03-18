<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="itemsPerPage"
      v-model:sort-by="sortBy"
      v-model:sort-desc="sortDesc"
      class="elevation-1"
    >
      <template #item.name="{ item }">
        <v-chip color="primary" text-color="white">{{ item.name }}</v-chip>
      </template>
    </v-data-table>

    <v-pagination
      v-model="page"
      :length="totalPages"
      @update:model-value="loadPage"
      rounded="circle"
      color="primary"
    />
  </v-container>
</template>

<script>
export default {
  name: "RtTable",
  data() {
    return {
      page: 1,
      items: [],
      totalItems: 50,
      itemsPerPage: 10,
      sortBy: "name",
      sortDesc: false,
      headers: [
        { text: "Name", key: "name", sortable: true },
        { text: "Age", key: "age", sortable: true },
        { text: "City", key: "city", sortable: true },
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
    this.loadPage();
  },
};
</script>

<style scoped>
.v-container {
  max-width: 800px;
  margin: auto;
}

.v-pagination {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
</style>
