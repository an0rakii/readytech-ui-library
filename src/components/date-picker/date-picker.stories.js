import RtDatePicker from './date-picker.vue';

export default {
  title: 'Components/Date Picker',
  component: RtDatePicker,
  argTypes: {
    color: { control: 'color' },
    elevation: { control: { type: 'number', min: 0, max: 24, step: 1 } },
    modelValue: { control: 'date' },
    minDate: { control: 'date' },
    maxDate: { control: 'date' },
    disabled: { control: 'boolean' },
    locale: { control: 'text' },
    showAdjacentMonths: { control: 'boolean' }
  }
};

const Template = (args) => ({
  components: { RtDatePicker },
  setup() {
    return { args };
  },
  template: `<RtDatePicker v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '2024-06-15',
  minDate: '2024-01-01',
  maxDate: '2024-12-31',
  disabled: false,
  locale: 'en',
};

export const WithElevation = Template.bind({});
WithElevation.args = {
  modelValue: '2024-06-15',
  minDate: '2022-01-01',
  maxDate: '2024-12-31',
  disabled: false,
  locale: 'en',
  elevation: 24,
};

export const Disabled = Template.bind({});
Disabled.args = {
  modelValue: '2024-06-15',
  minDate: '2024-01-01',
  maxDate: '2024-12-31',
  disabled: true,
  locale: 'en',
};
