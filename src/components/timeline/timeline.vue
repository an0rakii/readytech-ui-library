<template>
    <v-timeline :dense="dense" :align-top="alignTop" :side="side" :reverse="reverse">
      <v-timeline-item
        v-for="(item, index) in items"
        :key="index"
        :color="item.color"
        :icon="item.icon"
        :title="item.title"
        :subtitle="item.subtitle"
      >
        {{ item.content }}
      </v-timeline-item>
    </v-timeline>
  </template>
  
  <script>
  export default {
    name: "RtTimeline",
    props: {
      items: {
        type: Array,
        default: () => [
          {
            color: "primary",
            icon: "mdi-calendar",
            title: "Event 1",
            subtitle: "January 2024",
            content: "This is the first event in the timeline.",
          },
          {
            color: "success",
            icon: "mdi-check-circle",
            title: "Event 2",
            subtitle: "February 2024",
            content: "This is the second event in the timeline.",
          },
          {
            color: "error",
            icon: "mdi-alert",
            title: "Event 3",
            subtitle: "March 2024",
            content: "This is the third event in the timeline.",
          },
        ],
      },
      side: {
        type: String,
        default: "default",
      },
      dense: {
        type: Boolean,
        default: false,
      },
      alignTop: {
        type: Boolean,
        default: false,
      },
      reverse: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles if necessary */
  </style>
  