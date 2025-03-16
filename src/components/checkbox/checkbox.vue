<template>
  <v-checkbox
    v-model="checkedValue"
    :label="label"
    :disabled="disabled"
    :error="error"
    :error-messages="errorMessages"
    :indeterminate="indeterminate"
    :aria-labelledby="ariaLabelId"
    :aria-describedby="ariaErrorMessagesId"
    :aria-checked="indeterminate ? 'mixed' : checkedValue ? 'true' : 'false'"
    :aria-disabled="disabled ? 'true' : 'false'"
  />
</template>

<script>
export default {
  name: "RtCheckbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "Checkbox Label",
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
    indeterminate: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    checkedValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    // Compute the unique ID for the checkbox label
    ariaLabelId() {
      return `checkbox-label-${this._uid}`;
    },
    // If error messages exist, generate a unique ID to associate with aria-describedby
    ariaErrorMessagesId() {
      return this.errorMessages.length ? `checkbox-error-${this._uid}` : null;
    },
  },
};
</script>

<style scoped>
/* Optional: Ensure that the checkbox is properly focusable and interactive */
.v-checkbox input {
  outline: none;
}

.v-checkbox input:focus {
  outline: 2px solid #005fcc; /* Add a custom focus outline for accessibility */
}
</style>
