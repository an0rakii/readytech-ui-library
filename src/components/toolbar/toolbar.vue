<template>
    <v-toolbar
      dense 
      class="rt-toolbar"
      :collapse="collapse"
      :with-menu="withMenu"
    >
      <v-btn
        :icon="icon"
      >
        <v-icon
          v-if="icon"
          :icon="iconPlaceholder"
        />
      </v-btn>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu v-if="withMenu">
        <template v-slot:activator="{ props }">

          <RtAvatar
            avatarImage="https://randomuser.me/api/portraits/men/32.jpg"
            icon="mdi-dots-vertical"
            variant="text"
            v-bind="props"
          ></RtAvatar>
        </template>

        <v-list>
          <v-list-item v-for="(toolbarMenuitem, i) in toolbarMoreItems" :key="i">
            <v-list-item-title>{{ toolbarMenuitem.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu v-if="withMenu">
        <template v-slot:activator="{ props }">

          <v-btn
            icon="mdi-dots-vertical"
            variant="text"
            v-bind="props"
          ></v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(toolbarMenuitem, i) in toolbarMoreItems" :key="i">
            <v-list-item-title>{{ toolbarMenuitem.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-toolbar>
  </template>
  
  <script>
  import RtButton from '../button/button.vue';
  import RtIcon from '../icon/icon.vue';
  import RtAvatar from '../avatar/avatar.vue';
  export default {
  data () {
    return {
    }
  },
    name: "RtToolbar",
    props: {
      withMenu: {
        type: Boolean,
        default: false
      },
      iconPlaceholder: {
        type: String,
        default: 'mdi-magnify'
      },
      icon: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        required: true
      },
      collapse: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      toolbarMoreItems: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }
  </script>
  
  <style scoped>
  .rt-toolbar {
    background-color: #1976D2;
    color: white;
  }
  </style>
  