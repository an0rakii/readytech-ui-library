import RtHover from './hover.vue';

export default {
  title: 'Components/Hover',
  component: RtHover,
  argTypes: {
    closeDelay: {
      control: 'number',
      description: 'Delay before the hover effect is removed',
      defaultValue: 200,
    },
    openDelay: {
      control: 'number',
      description: 'Delay before the hover effect',
      defaultValue: 200,
    },
    hoverEffect: {
      control: 'boolean',
      description: 'Toggle hover effect',
      defaultValue: true,
    },
  },
};

const Template = (args) => ({
  components: { RtHover },
  setup() {
    return { args };
  },
  template: `<RtHover v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  hoverEffect: true,
};

export const NoHoverEffect = Template.bind({});
NoHoverEffect.args = {
  hoverEffect: false,
};
