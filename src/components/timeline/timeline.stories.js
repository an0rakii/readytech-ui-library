import RtTimeline from './timeline.vue';

export default {
  title: 'Components/Timeline',
  component: RtTimeline,
  argTypes: {
    items: {
      control: { type: 'array' },
      description: 'An array of timeline items with properties: `color`, `icon`, `title`, `subtitle`, and `content`.',
    },
    dense: {
      control: { type: 'boolean' },
      description: 'If true, makes the timeline more compact.',
    },
    alignTop: {
      control: { type: 'boolean' },
      description: 'If true, aligns timeline items to the top.',
    },
    side: {
      control: { type: 'select' },
      description: 'The side of the timeline to display the items on.',
      options: ['default', 'start', 'end'],
    },
    reverse: {
      control: { type: 'boolean' },
      description: 'If true, reverses the order of timeline items.',
    },
  },
};

const Template = (args) => ({
  components: { RtTimeline },
  setup() {
    return { args };
  },
  template: '<RtTimeline v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      color: "primary",
      icon: "mdi-calendar",
      title: "Event 1",
      subtitle: "January 2024",
      content: "This is the first event in the timeline.",
    },
    {
      color: "success",
      icon: "mdi-check-circle",
      title: "Event 2",
      subtitle: "February 2024",
      content: "This is the second event in the timeline.",
    },
    {
      color: "error",
      icon: "mdi-alert",
      title: "Event 3",
      subtitle: "March 2024",
      content: "This is the third event in the timeline.",
    },
  ],
  dense: false,
  alignTop: false,
  reverse: false,
  side: "default",
};

export const DenseTimeline = Template.bind({});
DenseTimeline.args = {
  ...Default.args,
  dense: true,
};

export const TimelineEnd = Template.bind({});
TimelineEnd.args = {
  ...Default.args,
  dense: false,
  side: "end",
};

export const TimelineStart = Template.bind({});
TimelineStart.args = {
  ...Default.args,
  dense: false,
  side: "start",
};

export const ReverseTimeline = Template.bind({});
ReverseTimeline.args = {
  ...Default.args,
  reverse: true,
};

export const CustomItems = Template.bind({});
CustomItems.args = {
  items: [
    {
      color: "purple",
      icon: "mdi-star",
      title: "Custom Event 1",
      subtitle: "April 2024",
      content: "This is a custom event with a different icon and color.",
    },
    {
      color: "orange",
      icon: "mdi-fire",
      title: "Custom Event 2",
      subtitle: "May 2024",
      content: "This event has a fiery theme!",
    },
  ],
  side: "start",
};
