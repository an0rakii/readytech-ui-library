<template>
  <v-img
    :src="src"
    :alt="alt"
    :lazy-src="lazySrc"
    :aspect-ratio="aspectRatio"
    :gradient="gradient"
    :loading="loading"
    :transition="transition"
    :class="classes"
  >
    <template v-slot:placeholder>
      <slot name="placeholder">Loading...</slot>
    </template>
    <template v-slot:default>
      <slot></slot>
    </template>
  </v-img>
</template>

<script>
export default {
  name: 'RtImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    lazySrc: {
      type: String,
      default: '',
    },
    aspectRatio: {
      type: [Number, String],
      default: null,
    },
    gradient: {
      type: String,
      default: '',
    },
    loading: {
      type: String,
      default: 'lazy', // Options: 'lazy', 'eager'
      validator: (value) => ['lazy', 'eager'].includes(value),
    },
    transition: {
      type: String,
      default: 'fade-transition',
    },
    classes: {
      type: [String, Array, Object],
      default: () => '',
    },
  },
};
</script>

<style scoped>
/* Add custom styles for RtImage if needed */
</style>
