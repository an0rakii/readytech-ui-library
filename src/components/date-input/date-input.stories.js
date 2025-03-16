import RtDateInput from "./date-input.vue";

export default {
  title: "Form/Date Input",
  component: RtDateInput,
  argTypes: {
    date: { control: "text", description: "Selected date in ISO format" },
    multiple: { control: "boolean", description: "Multiple date selection" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { RtDateInput },
  props: Object.keys(argTypes),
  template: '<RtDateInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  date: null,
};

export const DefaultMultiple = Template.bind({});
DefaultMultiple.args = {
  date: null,
  multiple: true,
};

export const WithPreSelectedDate = Template.bind({});
WithPreSelectedDate.args = {
  date: "2024-01-01",
};
