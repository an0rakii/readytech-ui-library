// RtIcon.stories.js
import RtIcon from './icon.vue';

export default {
  title: 'Components/icon',
  component: RtIcon,
  argTypes: {
    icon: { control: 'text', description: 'The name of the icon' },
    size: { control: 'text', description: 'Size of the icon' },
    color: { control: 'text', description: 'Color of the icon' },
    customClass: { control: 'text', description: 'Custom CSS class for the icon' },
  },
};

const Template = (args) => ({
  components: { RtIcon },
  setup() {
    return { args };
  },
  template: '<RtIcon v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  icon: 'mdi-home', // Default icon
  size: '24', // Default size
  color: '', // Default color (inherits Vuetify theme color)
  customClass: '', // No custom class by default
};

export const LargeIcon = Template.bind({});
LargeIcon.args = {
  icon: 'mdi-star',
  size: '48', // Large size
  color: 'yellow', // Color set to yellow
  customClass: '', // No custom class
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  icon: 'mdi-heart',
  size: '36', // Medium size
  color: 'red', // Red color
  customClass: 'my-custom-class', // Custom class to demonstrate styling
};
