<template>
  <v-text-field
    v-bind="inputProps"
    v-model="inputValue"
    :label="label"
    :placeholder="placeholder"
    :disabled="disabled"
    :error="error"
    :error-messages="errorMessages"
    :prepend-icon="prependIcon"
    clearable
    :hint="hint"
    :autocomplete="autocomplete"
    @click:clear="handleClear"
  />
</template>

<script>
export default {
  name: "RtText",
  props: {
    label: {
      type: String,
      default: "Input Field",
    },
    hint: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessages: {
      type: [String, Array],
      default: () => [],
    },
    prependIcon: {
      type: String,
      default: '', // Default to no icon
    },
    clearable: {
      type: Boolean,
      default: false, // Default is not clearable
    },
    autocomplete: {
      type: String,
      default: 'off', // Default is 'off'
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    inputProps() {
      return { ...this.$props }; // Pass all props to the v-text-field
    },
  },
  methods: {
    handleClear() {
      this.$emit("clear"); // Emit a custom clear event
    },
  },
};
</script>

<style scoped>
/* Add optional styling here if needed */
</style>
