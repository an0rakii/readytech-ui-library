import RtRangeSlider from "./range-slider.vue";

export default {
  title: "Form/Range Slider",
  component: RtRangeSlider,
  argTypes: {
    modelValue: { control: "array" },
    label: { control: "text" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    thumbLabel: { control: { type: "select", options: [false, true, "always"] } },
    ticks: { control: "boolean" },
    trackFillColor: { control: "color" },
    trackColor: { control: "color" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
  },
};

const Template = (args) => ({
  components: { RtRangeSlider },
  setup() {
    return { args };
  },
  template: '<RtRangeSlider v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: [20, 80],
  label: "Default Range Slider",
  min: 0,
  max: 100,
  step: 1,
  thumbLabel: false,
  ticks: false,
  trackFillColor: "",
  trackColor: "",
  disabled: false,
  error: false,
};

export const WithTicks = Template.bind({});
WithTicks.args = {
  modelValue: [25, 75],
  label: "Range Slider with Ticks",
  min: 0,
  max: 100,
  step: 5,
  thumbLabel: true,
  ticks: true,
  trackFillColor: "blue",
  trackColor: "grey",
  disabled: false,
  error: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  modelValue: [30, 70],
  label: "Disabled Range Slider",
  min: 0,
  max: 100,
  step: 1,
  thumbLabel: false,
  ticks: false,
  trackFillColor: "",
  trackColor: "",
  disabled: true,
  error: false,
};

export const WithError = Template.bind({});
WithError.args = {
  modelValue: [40, 60],
  label: "Range Slider with Error",
  min: 0,
  max: 100,
  step: 1,
  thumbLabel: "always",
  ticks: false,
  trackFillColor: "red",
  trackColor: "",
  disabled: false,
  error: true,
};
