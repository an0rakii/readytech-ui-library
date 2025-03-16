<template>
  <v-radio-group
    v-model="selectedValue"
    :label="label"
    :aria-labelledby="label"
    :row="direction === 'horizontal'"
    :color="color"
    @change="$emit('update:modelValue', selectedValue)"
  >
    <v-radio
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    />
  </v-radio-group>
</template>

<script>
export default {
  name: "RtRadioGroup",
  props: {
    label: {
      type: String,
      default: "Choose an option",
    },
    options: {
      type: Array,
      default: () => [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
      ],
      validator(value) {
        return (
          Array.isArray(value) &&
          value.every(
            (option) =>
              option &&
              typeof option === "object" &&
              "label" in option &&
              "value" in option
          )
        );
      },
    },
    color: {
      type: String,
      default: "primary",
    },
    direction: {
      type: String,
      default: "inline",
      validator(value) {
        return ["inline", "column"].includes(value);
      },
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  computed: {
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
  },
};
</script>

<style scoped>
/* Add optional styles if needed */
</style>
