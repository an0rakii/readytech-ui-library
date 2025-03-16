import RtRatings from './ratings.vue';

export default {
  title: 'Components/Ratings',
  component: RtRatings,
  argTypes: {
    modelValue: {
      control: { type: 'number' },
      description: 'The current rating value',
    },
    length: {
      control: { type: 'number' },
      description: 'The total number of rating stars',
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'Disables interaction with the rating component',
    },
    color: {
      control: { type: 'text' },
      description: 'The color of the filled icons',
    },
    emptyIcon: {
      control: { type: 'text' },
      description: 'The icon for empty ratings',
    },
    fullIcon: {
      control: { type: 'text' },
      description: 'The icon for full ratings',
    },
    halfIcon: {
      control: { type: 'text' },
      description: 'The icon for half-filled ratings',
    },
    clearable: {
      control: { type: 'boolean' },
      description: 'Allows clearing the rating by clicking on it',
    },
  },
};

const Template = (args) => ({
  components: { RtRatings },
  setup() {
    return { args };
  },
  template: '<RtRatings v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: 3,
  length: 5,
  readonly: false,
  color: 'primary',
  emptyIcon: 'mdi-star-outline',
  fullIcon: 'mdi-star',
  halfIcon: 'mdi-star-half-full',
  clearable: false,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...Default.args,
  readonly: true,
};

export const CustomIcons = Template.bind({});
CustomIcons.args = {
  ...Default.args,
  emptyIcon: 'mdi-heart-outline',
  fullIcon: 'mdi-heart',
  color: 'red',
};
