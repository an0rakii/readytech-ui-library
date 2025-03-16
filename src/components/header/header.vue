<template>
  <header>
    <v-app-bar>

      <v-app-bar-title>
        <img src="https://nesa.com.au/wp-content/uploads/2021/05/Readytech-Logo-2021.png" height="32px" alt="ReadyTech Logo" />
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <span class="mr-3" v-if="user">Welcome, <b>{{ user.name }}</b>!</span>
      <RtButton size="small" @click="$emit('logout')" label="Log out" v-if="user" />
      <RtButton size="small" @click="$emit('login')" label="Log in" v-if="!user" />
      <RtButton primary size="small" @click="$emit('createAccount')" label="Sign up" v-if="!user" />
    </v-app-bar>
  </header>
</template>

<script>
import './header.css';
import RtButton from '../button/button.vue';
export default {
  name: 'RtHeader',
  components: { RtButton }, 

  props: {
    user: {
      type: Object,
    },
  },

  emits: ['login', 'logout', 'createAccount'],
};
</script>
