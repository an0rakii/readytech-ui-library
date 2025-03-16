import RtTimePicker from './timepicker-ui.vue';

export default {
  title: 'Components/TimepickerUI',
  component: RtTimePicker,
  argTypes: {
    modelValue: { control: 'text', description: 'The selected time in HH:mm format' },
    minTime: { control: 'text', description: 'Minimum selectable time' },
    maxTime: { control: 'text', description: 'Maximum selectable time' },
    'update:modelValue': { action: 'timeSelected', description: 'Emitted when the time is updated' },
  },
};

const Template = (args) => ({
  components: { RtTimePicker },
  setup() {
    return { args };
  },
  template: '<RtTimePicker v-bind="args" @update:modelValue="args[\'update:modelValue\']" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '12:30',
  minTime: '08:00',
  maxTime: '20:00',
};

export const WithWideTimeRange = Template.bind({});
WithWideTimeRange.args = {
  modelValue: '06:00',
  minTime: '00:00',
  maxTime: '23:59',
};
