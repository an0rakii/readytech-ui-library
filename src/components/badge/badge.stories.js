import RtBadge from './badge.vue';

export default {
  title: 'Components/Badge',
  component: RtBadge,
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'The value displayed inside the badge.',
    },
    color: {
      control: { type: 'color' },
      description: 'The color of the badge.',
    },
    dot: {
      control: 'boolean',
      description: 'Whether the badge is displayed as a small dot.',
    },
    overlap: {
      control: 'boolean',
      description: 'If true, the badge overlaps its parent element.',
    },
    content: {
      control: 'text',
      description: 'Custom content displayed in the badge.',
    },
    size: {
      control: { type: 'number' },
      description: 'The size of the badge.',
    },
    bottom: {
      control: 'boolean',
      description: 'If true, positions the badge at the bottom.',
    },
    top: {
      control: 'boolean',
      description: 'If true, positions the badge at the top.',
    },
  },
};

const Template = (args) => ({
  components: { RtBadge },
  setup() {
    return { args };
  },
  template: '<RtBadge v-bind="args">{{ args.slotContent }}</RtBadge>',
});

export const Default = Template.bind({});
Default.args = {
  value: 5,
  color: 'blue',
  dot: false,
  overlap: false,
  content: '4',
  size: 20,
  bottom: false,
  top: false,
  slotContent: 'Emails',
};

export const DotBadge = Template.bind({});
DotBadge.args = {
  value: '',
  color: 'red',
  dot: true,
  overlap: true,
  content: '',
  size: 10,
  bottom: false,
  top: true,
  slotContent: '',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  value: '',
  color: 'green',
  dot: false,
  overlap: false,
  content: 'New',
  size: 20,
  bottom: true,
  top: false,
  slotContent: '',
};

export const LargeBadge = Template.bind({});
LargeBadge.args = {
  value: 100,
  color: 'purple',
  dot: false,
  overlap: true,
  content: '',
  size: 40,
  bottom: false,
  top: true,
  slotContent: '',
};

export const AccessibleBadge = Template.bind({});
AccessibleBadge.args = {
  value: 10,
  color: 'orange',
  dot: false,
  overlap: false,
  content: 'Important!',
  size: 20,
  bottom: false,
  top: true,
  slotContent: 'Notifications',
};
AccessibleBadge.parameters = {
  docs: {
    description: {
      story: 'An example of an accessible badge with clear ARIA labeling and focus styles.',
    },
  },
};
