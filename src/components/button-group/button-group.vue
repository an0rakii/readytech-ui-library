<template>
  <v-btn-group v-model="toggle_exclusive" mandatory>
    <v-btn v-for="(option, index) in options" :key="index" :value="option">
      {{ option }}
    </v-btn>
  </v-btn-group>
</template>

<script>
export default {
  name: "RtButtonGroup",
  props: {
    options: {
      type: Array,
      default: () => ["YES", "NO"],
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      toggle_exclusive: this.modelValue.length ? this.modelValue : ["YES"],
    };
  },
  watch: {
    modelValue(newValue) {
      this.toggle_exclusive = newValue.length ? newValue : ["YES"];
    },
  },
  methods: {
    toggle() {
      this.$emit("update:modelValue", this.toggle_exclusive);
    },
  },
  mounted() {
    if (!this.modelValue.length) {
      this.$emit("update:modelValue", ["YES"]);
    }
  },
};
</script>