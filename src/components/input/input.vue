<template>
  <v-text-field
    v-bind="inputProps"
    v-model="inputValue"
    :label="label"
    :placeholder="placeholder"
    :disabled="disabled"
    :error="hasError"
    :error-messages="computedErrorMessages"
    :prependIcon="prependIcon"
    :appendIcon="prependIcon"
    clearable
    :hint="hint"
    :autocomplete="autocomplete"
    @click:clear="handleClear"
    @blur="validate"
  >
    <!-- Custom slot for the prepend icon inside the input field -->
    <template v-if="prependIcon" v-slot:prepend-inner>
      <slot name="prepend-inner"></slot>
    </template>
    <template v-if="appendIcon" v-slot:append-inner>
      <slot name="append-inner"></slot>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "RtText",
  props: {
    appendIcon: {
      type: String,
      default: "",
    },
    prependIcon: {
      type: String,
      default: "",
    },
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
    clearable: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: "off",
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      localErrorMessages: [],
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
        this.validate();
      },
    },
    inputProps() {
      return { ...this.$props };
    },
    computedErrorMessages() {
      return this.localErrorMessages.length ? this.localErrorMessages : this.errorMessages;
    },
    hasError() {
      return this.computedErrorMessages.length > 0;
    },
  },
  methods: {
    handleClear() {
      this.$emit("clear");
      this.localErrorMessages = [];
    },
    validate() {
      this.localErrorMessages = this.rules
        .map((rule) => (typeof rule === "function" ? rule(this.modelValue) : true))
        .filter((message) => message !== true);
    },
  },
};
</script>

<style scoped>
/* Hide the default Vuetify prepend icon wrapper */
::v-deep(.v-input__prepend) {
  display: none !important;
}
/* Hide the default Vuetify append icon wrapper */
::v-deep(.v-input__append) {
  display: none !important;
}
/* Add optional styling here if needed */
</style>
