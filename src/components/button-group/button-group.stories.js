// RtButtonGroup.stories.js
import RtButtonGroup from "./button-group.vue";

export default {
  title: "Form/Button Group",
  component: RtButtonGroup,
  argTypes: {
    options: { control: "array" },
    modelValue: { control: "text" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { RtButtonGroup },
  props: Object.keys(argTypes),
  template: '<RtButtonGroup v-bind="$props" v-model="modelValue" />',
});

export const Default = Template.bind({});
Default.args = {
  options: ["YES", "NO"],
  modelValue: "YES",
};

export const CustomOptions = Template.bind({});
CustomOptions.args = {
  options: ["ON", "OFF", "MAYBE"],
  modelValue: "ON",
};