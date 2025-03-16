import RtSlider from './slider.vue';

export default {
  title: 'Form/Slider',
  component: RtSlider,
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    thumbLabel: { control: 'select', options: ['default', 'always', 'hover'] },
    thumbSize: { control: 'number' },
    showTicks: { control: 'boolean' },
    ticksSize: { control: 'number' },
    appendIcon: { control: 'text' },
    prependIcon: { control: 'text' },
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
    colors: { control: 'color' },
    icons: { control: 'object' },
    label: { control: 'text' },
  },
  setup() {
    // Defining the 'add' method to simulate the click action
    const add = () => {
      // You can implement any action you want here, for example:
      console.log('Append icon clicked');
    };

    return { args, add };
  },
};

const Template = (args) => ({
  components: { RtSlider },
  setup() {
    return { args };
  },
  template: '<RtSlider v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  readonly: false,
  direction: 'horizontal',
  colors: 'primary',
  icons: {},
  label: 'Slider',
};

export const Disabled = Template.bind({});
Disabled.args = {
  min: 0,
  max: 100,
  step: 1,
  disabled: true,
  readonly: false,
  direction: 'horizontal',
  colors: 'primary',
  icons: {},
  label: 'Disabled Slider',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  readonly: true,
  direction: 'horizontal',
  colors: 'primary',
  icons: {},
  label: 'Read-Only Slider',
};

export const Vertical = Template.bind({});
Vertical.args = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  readonly: false,
  direction: 'vertical',
  colors: 'primary',
  icons: {},
  label: 'Vertical Slider',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  min: 0,
  max: 100,
  step: 5,
  disabled: false,
  readonly: false,
  direction: 'horizontal',
  colors: '#ff5733', // Custom color
  icons: {},
  label: 'Custom Color Slider',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  min: 0,
  max: 100,
  step: 10,
  disabled: false,
  readonly: false,
  appendIcon: 'mdi-plus',
  prependIcon: 'mdi-minus',
  direction: 'horizontal',
  colors: 'primary',
  icons: {
    left: 'mdi-minus',
    right: 'mdi-plus',
  },
  label: 'Slider with Icons',
};

export const WithTicks = Template.bind({});
WithTicks.args = {
  min: 0,
  max: 100,
  step: 10,
  disabled: false,
  readonly: false,
  showTicks: true,
  ticksSize: 4,
  direction: 'horizontal',
  colors: 'primary',
  icons: {
    left: 'mdi-minus',
    right: 'mdi-plus',
  },
  label: 'Slider with Icons',
};

export const WithThumbLabel = Template.bind({});
WithThumbLabel.args = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  readonly: false,
  thumbLabel: 'default',
  thumbSize: 16,
  direction: 'horizontal',
  colors: 'primary',
  icons: {},
  label: 'Slider',
};

export const WithMinMax = Template.bind({});
WithMinMax.args = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  readonly: false,
  thumbLabel: 'default',
  thumbSize: 16,
  direction: 'horizontal',
  colors: 'primary',
  icons: {},
  label: 'Slider',
};