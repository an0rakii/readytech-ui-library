import RtSnackbar from './snackbar.vue';

export default {
  title: 'Components/Snackbar',
  component: RtSnackbar,
  argTypes: {
    message: {
      control: { type: 'text' },
      description: 'The message displayed inside the snackbar.',
    },
    timeout: {
      control: { type: 'number' },
      description: 'The time in milliseconds before the snackbar automatically hides.',
    },
    buttonText: {
      control: { type: 'text' },
      description: 'The text displayed on the button that opens the snackbar.',
    },
    buttonColor: {
      control: { type: 'text' },
      description: 'The color of the button that opens the snackbar.',
    },
    snackbarColor: {
      control: { type: 'text' },
      description: 'The color of the snackbar background.',
    },
    actionButtonText: {
      control: { type: 'text' },
      description: 'The text displayed on the snackbar action button.',
    },
    actionButtonColor: {
      control: { type: 'text' },
      description: 'The color of the snackbar action button.',
    },
  },
};

const Template = (args) => ({
  components: { RtSnackbar },
  setup() {
    return { args };
  },
  template: '<RtSnackbar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  message: "Hello, I'm a snackbar!",
  timeout: 6000,
  buttonText: "Open Snackbar",
  buttonColor: "primary",
  snackbarColor: "",
  actionButtonText: "Close",
  actionButtonColor: "pink",
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  ...Default.args,
  snackbarColor: "blue",
  buttonColor: "green",
  actionButtonColor: "red",
};

export const LongMessage = Template.bind({});
LongMessage.args = {
  ...Default.args,
  message: "This is a longer snackbar message to test the component's behavior with more text content.",
};
