import RtProgressCircle from './progress-circle.vue';

export default {
  title: 'Components/Progress Circle',
  component: RtProgressCircle,
  argTypes: {
    size: {
      control: { type: 'number' },
    },
    width: {
      control: { type: 'number' },
    },
    value: {
      control: { type: 'number' },
    },
    rotate: {
      control: { type: 'number' },
    },
    color: {
      control: { type: 'color' },
    },
    indeterminate: {
      control: 'boolean',
    },
    buffer: {
      control: { type: 'number' },
    },
  },
};

const Template = (args) => ({
  components: { RtProgressCircle },
  setup() {
    return { args };
  },
  template: '<RtProgressCircle v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  size: 40,
  width: 4,
  value: 50,
  rotate: 0,
  color: 'primary',
  indeterminate: false,
  buffer: 100,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  size: 60,
  width: 5,
  value: 0,
  rotate: 0,
  color: 'blue',
  indeterminate: true,
  buffer: 100,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: 100,
  width: 8,
  value: 30,
  rotate: 0,
  color: 'green',
  indeterminate: false,
  buffer: 100,
};

export const Rotate = Template.bind({});
Rotate.args = {
  size: 40,
  width: 4,
  value: 70,
  rotate: 45,
  color: 'red',
  indeterminate: false,
  buffer: 100,
};

export const Buffer = Template.bind({});
Buffer.args = {
  size: 40,
  width: 4,
  value: 60,
  rotate: 0,
  color: 'purple',
  indeterminate: false,
  buffer: 80,
};
