<template>
  <v-badge 
    :value="value" 
    :color="color" 
    :dot="dot" 
    :overlap="overlap" 
    :content="content" 
    :size="size" 
    :bottom="bottom" 
    :top="top"
    role="status" 
    :aria-label="getAriaLabel"
    :aria-live="dot ? 'polite' : 'off'"
    tabindex="0"
  >
    <slot></slot>
  </v-badge>
</template>

<script>
export default {
  name: 'RtBadge',
  props: {
    value: {
      type: [String, Number],
      default: 0,
    },
    color: {
      type: String,
      default: 'red',
    },
    dot: {
      type: Boolean,
      default: false,
    },
    overlap: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      default: '',
    },
    size: {
      type: [String, Number],
      default: '20',
    },
    bottom: {
      type: Boolean,
      default: false,
    },
    top: {
      type: Boolean,
      default: false,
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
/* Ensure text inside the badge has adequate contrast */
.v-badge {
  /* color: #fff; */
}

.v-badge[aria-label]:focus {
  outline: 2px solid #005fcc;
  outline-offset: 4px;
}
</style>
