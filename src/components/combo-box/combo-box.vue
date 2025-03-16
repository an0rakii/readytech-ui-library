<template>
  <v-combobox
    v-bind="inputProps"
    v-model="selectedValue"
    :label="label"
    :items="items"
    :placeholder="placeholder"
    :disabled="disabled"
    :chips="chips"
    :clearable="clearable"
    :multiple="multiple"
    :error="error"
    :error-messages="errorMessages"
    :density="density"
    :readonly="readonly"
    :aria-label="ariaLabel"
    :aria-describedby="error ? errorId : null"
    :aria-disabled="disabled.toString()"
    :aria-multiselectable="multiple.toString()"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>

<script>
export default {
  name: "RtComboBox",
  props: {
    modelValue: {
      type: [String, Array],
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: "Select an option",
    },
    placeholder: {
      type: String,
      default: "Type to search...",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    chips: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    multiple: {
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
    density: {
      type: String,
      default: "default",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: "",
    },
    errorId: {
      type: String,
      default: "error-messages",
    },
  },
  computed: {
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    inputProps() {
      const { modelValue, ...props } = this.$props; // Avoid passing modelValue to v-combobox directly
      return props;
    },
  },
  methods: {
    handleFocus(event) {
      this.$emit("focus", event);
    },
    handleBlur(event) {
      this.$emit("blur", event);
    },
  },
};
</script>

<style scoped>
/* Optional styling for enhanced focus visibility */
.v-combobox:focus {
  outline: 2px solid #005fcc; /* High-contrast outline for better focus visibility */
  outline-offset: 2px;
}
</style>
