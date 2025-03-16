<template>
  <v-divider
    :color="color"
    :density="density"
    :inset="inset"
    :length="length"
    :thickness="thickness"
    :vertical="vertical"
  />
</template>

<script>
export default {
  name: 'RtDivider',
  props: {
    color: {
      type: String,
      default: '',
    },
    inset: {
      type: Boolean,
      default: false,
    },
    length: {
      type: [Number, String],
      default: '',
    },
    thickness: {
      type: [Number, String],
      default: '17',
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
