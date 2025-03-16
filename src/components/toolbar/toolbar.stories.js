import RtToolbar from './toolbar.vue';

export default {
  title: 'Layout/Toolbar',
  component: RtToolbar,
  argTypes: {
    title: { control: 'text' },
    collapse: { control: 'boolean' },
    withMenu: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { RtToolbar },
  setup() {
    return { args };
  },
  template: '<RtToolbar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'My Toolbar Title',
  collapse: false,
  icon: true,
  withMenu: false,
  iconPlaceholder: 'mdi-magnify',
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Custom Title Here',
  collapse: false,
  icon: true,
  withMenu: false,
  iconPlaceholder: 'mdi-magnify',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  title: 'Custom Title Here',
  collapse: true,
  icon: true,
  iconPlaceholder: 'mdi-magnify',
  withMenu: false,
};

export const WithMenu = Template.bind({});
WithMenu.args = {
  title: 'Custom Title Here',
  collapse: false,
  icon: true,
  iconPlaceholder: 'mdi-magnify',
  withMenu: true,
};
