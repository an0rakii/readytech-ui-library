import RtCheckbox from './checkbox.vue'; // Make sure the path is correct
import { ref } from 'vue';

export default {
  title: 'Form/Checkbox',
  component: RtCheckbox,
  argTypes: {
    modelValue: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    errorMessages: { control: 'array' },
    indeterminate: { control: 'boolean' },
  },
};

// Template for the RtCheckbox story
const Template = (args) => ({
  components: { RtCheckbox },
  setup() {
    const modelValue = ref(args.modelValue);
    return { modelValue, args };
  },
  template: '<RtCheckbox v-bind="args" v-model="modelValue" />',
});

// Default Story
export const Default = Template.bind({});
Default.args = {
  modelValue: false,
  label: 'Checkbox Label',
  disabled: false,
  error: false,
  errorMessages: [],
  indeterminate: false,
};

// Checked State
export const Checked = Template.bind({});
Checked.args = {
  modelValue: true,
  label: 'Checkbox Label',
  disabled: false,
  error: false,
  errorMessages: [],
  indeterminate: false,
};

// Disabled State
export const Disabled = Template.bind({});
Disabled.args = {
  modelValue: false,
  label: 'Checkbox Label',
  disabled: true,
  error: false,
  errorMessages: [],
  indeterminate: false,
};

// With Error Message
export const WithError = Template.bind({});
WithError.args = {
  modelValue: false,
  label: 'Checkbox Label',
  disabled: false,
  error: true,
  errorMessages: ['This checkbox is required.'],
  indeterminate: false,
};

// Indeterminate State
export const Indeterminate = Template.bind({});
Indeterminate.args = {
  modelValue: false,
  label: 'Checkbox Label',
  disabled: false,
  error: false,
  errorMessages: [],
  indeterminate: true,
};

// Checked and Disabled
export const CheckedAndDisabled = Template.bind({});
CheckedAndDisabled.args = {
  modelValue: true,
  label: 'Checkbox Label',
  disabled: true,
  error: false,
  errorMessages: [],
  indeterminate: false,
};
