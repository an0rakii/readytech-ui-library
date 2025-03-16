import RtStepper from './stepper.vue';

export default {
  title: 'Components/Stepper',
  component: RtStepper,
  argTypes: {
    modelValue: {
      control: {
        type: 'number',
      },
      description: 'The current step value of the stepper',
    },
    vertical: {
      control: {
        type: 'boolean',
      },
      description: 'Defines whether the stepper is vertical or horizontal',
    },
  },
};

const Template = (args) => ({
  components: { RtStepper },
  setup() {
    return { args };
  },
  template: `
    <RtStepper v-bind="args">
      <v-stepper-step :step="0" label="Step 1">
        <div>Content for Step 1</div>
      </v-stepper-step>
      <v-stepper-step :step="1" label="Step 2">
        <div>Content for Step 2</div>
      </v-stepper-step>
      <v-stepper-step :step="2" label="Step 3">
        <div>Content for Step 3</div>
      </v-stepper-step>
    </RtStepper>
  `,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: 0,
  vertical: false,
};

export const VerticalStepper = Template.bind({});
VerticalStepper.args = {
  modelValue: 1,
  vertical: true,
};

export const Step2Active = Template.bind({});
Step2Active.args = {
  modelValue: 2,
  vertical: false,
};
