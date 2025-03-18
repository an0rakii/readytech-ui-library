import RtHorizontalRule from '../horizontal-rule/horizontal-rule.vue';

export default {
  title: 'Components/Horizontal Rule',
  component: RtHorizontalRule,
  argTypes: {
    text: { control: 'text' },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'black', 'white'],
    },
    thickness: { control: 'text' },
    margin: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { RtHorizontalRule },
  setup() {
    return { args };
  },
  template: '<RtHorizontalRule v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: '',
  color: 'primary',
  thickness: '2px',
  margin: '16px 0',
};

export const WithText = Template.bind({});
WithText.args = {
  text: 'Section Title',
  color: 'secondary',
  thickness: '3px',
  margin: '20px 0',
};

export const ThickDivider = Template.bind({});
ThickDivider.args = {
  text: '',
  color: 'error',
  thickness: '5px',
  margin: '24px 0',
};

export const CustomMargin = Template.bind({});
CustomMargin.args = {
  text: 'Custom Margin',
  color: 'info',
  thickness: '2px',
  margin: '40px 0',
};
