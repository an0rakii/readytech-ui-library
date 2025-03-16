import RtTooltip from './popover.vue';

export default {
  title: 'Components/RtTooltip',
  component: RtTooltip,
  argTypes: {
    buttonText: { control: 'text' },
    tooltipText: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { RtTooltip },
  setup() {
    return { args };
  },
  template: '<RtTooltip v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Hover over me',
  tooltipText: 'This is the tooltip text!',
};

export const CustomTooltip = Template.bind({});
CustomTooltip.args = {
  buttonText: 'Click me for info',
  tooltipText: 'Here is a custom tooltip!',
};
