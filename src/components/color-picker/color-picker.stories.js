import RtColorPicker from './color-picker.vue';

export default {
  title: 'Components/Color Picker',
  component: RtColorPicker,
  argTypes: {
    elevation: { control: { type: 'number', min: 0, max: 24, step: 1 } },
    modelValue: { control: 'color' },
    canvasHeight: { control: { type: 'number', min: 100, max: 500, step: 10 } },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { RtColorPicker },
  setup() {
    return { args };
  },
  template: `<RtColorPicker v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '#00ff00',
  canvasHeight: 150,
  disabled: false,
};
