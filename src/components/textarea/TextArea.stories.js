import RtTextArea from './textArea.vue';

export default {
  title: 'Form/Text Area',
  component: RtTextArea,
  argTypes: {
    modelValue: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    rows: { control: 'number' },
    disabled: { control: 'boolean' },
    prependIcon: { control: 'text' }, // Control for prependIcon
    autocomplete: { control: 'text' }, // Control for autocomplete
    backgroundColor: { control: 'color' }, // Control for background color
    color: { control: 'color' }, // Control for text color
  },
};

const Template = (args) => ({
  components: { RtTextArea },
  setup() {
    return { args };
  },
  template: '<RtTextArea v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '',
  label: 'Your Message',
  placeholder: 'Type your message...',
  rows: 4,
  disabled: false,
  prependIcon: '', // No icon by default
  clearable: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  modelValue: 'This is a disabled text area',
  label: 'Disabled Field',
  placeholder: 'You cannot edit this...',
  rows: 4,
  disabled: true,
  prependIcon: '', // No icon in disabled state
  clearable: false
};

export const WithPrependIcon = Template.bind({});
WithPrependIcon.args = {
  modelValue: '',
  label: 'Message with Icon',
  placeholder: 'Type your message...',
  rows: 4,
  disabled: false,
  prependIcon: 'mdi-account', // Example icon
  clearable: false
};

export const WithClearable = Template.bind({});
WithClearable.args = {
  modelValue: '',
  label: 'Message with Icon',
  placeholder: 'Type your message...',
  rows: 4,
  disabled: false,
  clearable: true
};

export const WithCustomColors = Template.bind({});
WithCustomColors.args = {
  modelValue: '',
  label: 'Custom Colors',
  placeholder: 'Type with custom colors...',
  rows: 4,
  disabled: false,
  prependIcon: '',
  clearable: false,
  autocomplete: 'off',
  backgroundColor: '#f7f7f7', // Example background color
  color: '#ff6347', // Tomato red text color
};