import RtSwitch from './switch.vue';

export default {
  title: 'Form/Switch',
  component: RtSwitch,
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'The current state of the switch (on/off).',
    },
    label: {
      control: 'text',
      description: 'The label displayed next to the switch.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the switch if true.',
    },
    color: {
      control: 'color',
      description: 'The color of the switch when active.',
    },
    hideDetails: {
      control: 'boolean',
      description: 'Hides the switch details (e.g., validation messages).',
    },
    onChange: {
      action: 'changed',
      description: 'Emitted when the switch state changes.',
    },
  },
};

const Template = (args) => ({
  components: { RtSwitch },
  setup() {
    return { args };
  },
  template: `<RtSwitch v-bind="args" @update:modelValue="args.onChange" />`,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: false,
  label: 'Enable notifications',
  disabled: false,
  color: 'primary',
  hideDetails: true,
};

export const DisabledSwitch = Template.bind({});
DisabledSwitch.args = {
  modelValue: true,
  label: 'Switch is disabled',
  disabled: true,
  color: 'secondary',
  hideDetails: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  modelValue: false,
  label: 'Custom color switch',
  disabled: false,
  color: '#ff5722',
  hideDetails: false,
};
