<template>
  <v-container fluid>
    <v-row>
      <!-- Loop through the breakpoints to demonstrate responsiveness -->
      <v-col
        v-for="(breakpoint, index) in breakpoints"
        :key="index"
        :cols="breakpoint.cols"
        :sm="breakpoint.sm"
        :md="breakpoint.md"
        :lg="breakpoint.lg"
        :xl="breakpoint.xl"
        class="pa-3"
      >
        <div class="grid-box">
          {{ breakpoint.label }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RtGrid",
  props: {
    breakpoints: {
      type: Array,
      default: () => [
        { label: "Default (cols: 12)", cols: 12 },
        { label: "Small (sm: 6)", cols: 12, sm: 6 },
        { label: "Medium (md: 4)", cols: 12, sm: 6, md: 4 },
        { label: "Large (lg: 3)", cols: 12, sm: 6, md: 4, lg: 3 },
        { label: "Extra Large (xl: 2)", cols: 12, sm: 6, md: 4, lg: 3, xl: 2 },
      ],
    },
  },
};
</script>

<style scoped>
.grid-box {
  background-color: #0078d4;
  color: white;
  text-align: center;
  padding: 16px;
  border-radius: 4px;
}
</style>
