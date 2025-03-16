import RtExpansionComponent from './expansion-panel.vue';

export default {
  title: 'Components/Expansion Component',
  component: RtExpansionComponent,
  argTypes: {
    items: {
      control: { type: 'array' },
      description: 'Array of items with `title` and `content` properties.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the expansion panels.',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'accordion', 'inset', 'popout'],
      description: 'Sets the variant of the expansion panels.',
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Allows multiple panels to be expanded simultaneously.',
    },
    expandIcon: {
      control: { type: 'text' },
      description: 'Icon displayed when the panel is collapsed.',
    },
    collapseIcon: {
      control: { type: 'text' },
      description: 'Icon displayed when the panel is expanded.',
    },
  },
};

const Template = (args) => ({
  components: { RtExpansionComponent },
  setup() {
    return { args };
  },
  template: `
    <rt-expansion-component v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Panel 1', content: 'Content for Panel 1' },
    { title: 'Panel 2', content: 'Content for Panel 2' },
    { title: 'Panel 3', content: 'Content for Panel 3' },
  ],
  disabled: false,
  variant: 'default',
  multiple: false,
  expandIcon: 'mdi-chevron-down',
  collapseIcon: 'mdi-chevron-up',
};

export const CustomIcons = Template.bind({});
CustomIcons.args = {
  ...Default.args,
  expandIcon: 'mdi-plus',
  collapseIcon: 'mdi-minus',
};

export const MultiplePanels = Template.bind({});
MultiplePanels.args = {
  ...Default.args,
  multiple: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
