import RtSystemBar from "./system-bar.vue";

export default {
  title: "Components/System Bar",
  component: RtSystemBar,
  argTypes: {
    color: {
      control: { type: "text" },
      description: "The background color of the system bar.",
      defaultValue: "primary",
    },
    dark: {
      control: { type: "boolean" },
      description: "Enables dark mode for the system bar.",
      defaultValue: false,
    },
    elevated: {
      control: { type: "boolean" },
      description: "Adds elevation to the system bar.",
      defaultValue: false,
    },
    message: {
      control: { type: "text" },
      description: "Optional text to display on the system bar.",
      defaultValue: "",
    },
  },
};

const Template = (args) => ({
  components: { RtSystemBar },
  setup() {
    return { args };
  },
  template: `<RtSystemBar v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  dark: false,
  elevated: false,
  message: "This is a system bar",
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  color: "black",
  dark: true,
  elevated: false,
  message: "Dark mode system bar",
};

export const ElevatedBar = Template.bind({});
ElevatedBar.args = {
  color: "secondary",
  dark: false,
  elevated: true,
  message: "Elevated system bar",
};
