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
  background-color: #D2D4D5;
}

.v-container .light-grey {
  background-color: #F4F4F4;
}

.v-container.white {
  background-color: #fff;
}

.v-container.buttons-content{
  padding: 18px 0px 18px 0px !important;
}

.v-container.content{
  padding-top: 16px;
  padding-left: 24px;
  padding-bottom: 16px;
  padding-right: 24px;
}


@media (min-width: 960px) {
    .v-container {
        max-width: initial;
    }
}
/* Add any scoped styles here if needed */
</style>


