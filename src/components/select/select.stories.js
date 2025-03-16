import RtSelect from './select.vue';

export default {
  title: 'Form/Select',
  component: RtSelect,
  argTypes: {
    items: { control: 'array' },
    label: { control: 'text' },
    density: { control: 'select', options: ['comfortable', 'compact', 'default'] },
    outlined: { control: 'boolean' },
    chips: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { RtSelect },
  setup() {
    return { args };
  },
  template: '<RtSelect v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [{text: 'Option 1', value: 'Option 1'}, {text: 'Option 2', value: 'Option 2'}, {text: 'Option 3', value: 'Option 3'}],
  label: 'Select Option',
  density: 'compact',
  outlined: false,
  chips: false,
};

export const ComfortableDensity = Template.bind({});
ComfortableDensity.args = {
  items: ['Option A', 'Option B', 'Option C'],
  label: 'Select Option',
  density: 'comfortable',
  outlined: false,
  chips: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  label: 'Select Item',
  density: 'default',
  outlined: true,
  chips: false,
};

export const WithChips = Template.bind({});
WithChips.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  label: 'Select Items',
  density: 'default',
  multiple: true,
  chips: true,
};
