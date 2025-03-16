import RtDivider from './divider.vue'

export default {
  title: 'Components/Divider',
  component: RtDivider,
  argTypes: {
    color: { control: 'text' },
    inset: { control: 'boolean' },
    length: { control: 'text' },
    thickness: { control: 'number' },
    vertical: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { RtDivider },
  setup() {
    return { args };
  },
  template: `
    <RtDivider
      v-bind="args"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  color: '',
  inset: false,
  length: '',
  thickness: 1,
  vertical: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  color: '',
  length: '',
  thickness: 1,
  vertical: true,
};
