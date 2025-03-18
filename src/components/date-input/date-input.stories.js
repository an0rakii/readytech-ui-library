import RtDateInput from "./date-input.vue";

export default {
  title: "Form/Date Input",
  component: RtDateInput,
  argTypes: {
    modelValue: { control: "text", description: "Selected date in ISO format" },
    multiple: { control: "boolean", description: "Multiple date selection" },
    prependIcon: { control: "text", description: "Prepend icon name (e.g., mdi-calendar)" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { RtDateInput },
  props: Object.keys(argTypes),
  data() {
    return {
      selectedDate: args.modelValue || null, // Use modelValue for binding
    };
  },
  watch: {
    selectedDate(newValue) {
      this.$emit("update:modelValue", newValue);
    },
  },
  template: `
    <RtDateInput v-model="selectedDate" v-bind="$props" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: null,
};

export const DefaultMultiple = Template.bind({});
DefaultMultiple.args = {
  modelValue: null,
  multiple: true,
};

export const WithPreSelectedDate = Template.bind({});
WithPreSelectedDate.args = {
  modelValue: "2024-01-01",
};

export const WithPrependIcon = Template.bind({});
WithPrependIcon.args = {
  modelValue: null,
  prependIcon: "mdi-calendar-clock",
};
