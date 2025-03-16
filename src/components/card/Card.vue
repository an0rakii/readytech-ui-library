<template>
  <v-card
    :color="color"
    :elevation="elevation"
    :flat="flat"
    :hover="hover"
    :link="link"
    :loader-height="loaderHeight"
    :loading="loading"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="minHeight"
    :min-width="minWidth"
    :outlined="outlined"
    :raised="raised"
    :shaped="shaped"
    :tile="tile"
    :width="width"
    @click="onClick"
  >
    <slot />
    <template v-if="hasHeader">
    <v-card-title>{{ header }}</v-card-title>
  </template>
  <v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>
  <v-card-text>
    <slot></slot>
  </v-card-text>
  <template v-if="hasFooter">
    <v-card-actions>
      <RtButton color="btn-primary" text>Action 1</RtButton>
      <RtButton color="btn-primary" text>Action 2</RtButton>
    </v-card-actions>
  </template>
  </v-card>
</template>

<script>
import RtButton from '../button/button.vue';
export default {
  name: 'RtCard',
  components: {
    RtButton,
  },
  props: {
    header: {
      type: String,
      default: '',
    },
    hasHeader: {
      type: Boolean,
      default: false,
    },
    hasFooter: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    subtitle: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'white',
    },
    elevation: {
      type: [Number, String],
      default: 2,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    loaderHeight: {
      type: [Number, String],
      default: 4,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    maxHeight: {
      type: [Number, String],
      default: null,
    },
    maxWidth: {
      type: [Number, String],
      default: null,
    },
    minHeight: {
      type: [Number, String],
      default: null,
    },
    minWidth: {
      type: [Number, String],
      default: null,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    raised: {
      type: Boolean,
      default: false,
    },
    shaped: {
      type: Boolean,
      default: false,
    },
    tile: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: null,
    },
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>