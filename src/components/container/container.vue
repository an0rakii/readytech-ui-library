<template>
  <v-container :fluid="fluid" :class="containerClass">
    <slot></slot>
  </v-container>
</template>


<script>
export default {
  name: 'RtContainer',
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    containerClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    getAriaLabel() {
      if (this.dot) return 'Notification dot';
      if (this.content) return `Badge content: ${this.content}`;
      if (this.value) return `Badge value: ${this.value}`;
      return 'Badge';
    },
  },
};
</script>

<style scoped>
.v-container {
  background-color: #d8d8d8;
}

@media (min-width: 960px) {
    .v-container {
        max-width: initial;
    }
}
/* Add any scoped styles here if needed */
</style>


