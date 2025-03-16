import RtCalendar from './calendar.vue';

export default {
  title: 'Components/Calendar',
  component: RtCalendar,
};

const Template = (args) => ({
  components: { RtCalendar },
  setup() {
    return { args };
  },
  template: '<RtCalendar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  selectedDate: '2024-12-15',
  events: [
    { name: 'Meeting', start: '2024-12-15T10:00:00', end: '2024-12-15T12:00:00' },
    { name: 'Conference', start: '2024-12-16T14:00:00', end: '2024-12-16T16:00:00' },
  ],
  minDate: '2024-12-01',
  maxDate: '2024-12-31',
  weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};
