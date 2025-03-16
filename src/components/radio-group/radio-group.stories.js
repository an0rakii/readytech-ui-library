import RtRadioGroup from './radio-group.vue';

export default {
  title: 'Form/Radio Group',
  component: RtRadioGroup,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the radio group',
    },
    options: {
      control: 'array',
      description: 'Array of options for the radio group. Each option has a `label` and `value`.',
    },
    color: {
      control: 'color',
      description: 'Color of the radio buttons.',
    },
    direction: {
      control: 'select',
      options: ['inline', 'column'],
      description: 'Layout direction of the radio buttons.',
    },
    modelValue: {
      control: 'text',
      description: 'Currently selected value.',
    },
    onChange: {
      action: 'changed',
      description: 'Emitted when the selected value changes.',
    },
  },
};

const Template = (args) => ({
  components: { RtRadioGroup },
  setup() {
    return { args };
  },
  template: `<RtRadioGroup v-bind="args" @update:modelValue="args.onChange" />`,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Choose your favorite option',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  color: 'primary',
  direction: 'vertical',
  modelValue: 'option1',
};

export const HorizontalLayout = Template.bind({});
HorizontalLayout.args = {
  label: 'Choose your favorite option',
  options: [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ],
  color: 'secondary',
  direction: 'horizontal',
  modelValue: 'B',
};

export const WithCustomColors = Template.bind({});
WithCustomColors.args = {
  label: 'Choose your favorite color',
  options: [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ],
  color: 'red',
  direction: 'vertical',
  modelValue: 'green',
};
