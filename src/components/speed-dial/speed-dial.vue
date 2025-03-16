<template>
    <div class="v-speed-dial-wrapper">
      <v-speed-dial
        v-model="isOpen"
        :direction="direction"
        :transition="transition"
        :fab-size="fabSize"
        :color="color"
        :location="location"
      >
        <template #activator>
          <v-btn fab dark :color="color">
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </template>
  
        <v-btn v-for="(action, index) in actions" :key="index" fab small :color="action.color" @click="action.onClick">
          <v-icon>{{ action.icon }}</v-icon>
        </v-btn>
      </v-speed-dial>
    </div>
  </template>
  
  <script>
  export default {
    name: "RtSpeedDial",
    props: {
      location: {
        type: String,
        default: "left bottom", // Location of the speed dial
      },
      color: {
        type: String,
        default: "primary", // Color of the FAB button
      },
      fabSize: {
        type: String,
        default: "large", // Size of the FAB button
      },
      direction: {
        type: String,
        default: "top", // Direction of the speed dial expansion
      },
      transition: {
        type: String,
        default: "scale-transition", // Transition for the speed dial items
      },
      icon: {
        type: String,
        default: "mdi-plus", // Icon for the main FAB button
      },
      actions: {
        type: Array,
        default: () => [
          { icon: "mdi-pencil", color: "secondary", onClick: () => alert("Edit action clicked") },
          { icon: "mdi-delete", color: "red", onClick: () => alert("Delete action clicked") },
          { icon: "mdi-share", color: "green", onClick: () => alert("Share action clicked") },
        ],
      },
    },
    data() {
      return {
        isOpen: false, // Controls whether the speed dial is open
      };
    },
  };
  </script>
  
  <style scoped>
  .v-speed-dial-wrapper {
    position: relative;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 50px;
  }
  </style>
  