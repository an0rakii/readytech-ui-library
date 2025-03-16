import RtTabs from "./tabs.vue";

export default {
  title: "Components/Tabs",
  component: RtTabs,
  argTypes: {
    color: {
      control: { type: "text" },
      description: "The color of the active tab.",
      defaultValue: "primary",
    },
    dark: {
      control: { type: "boolean" },
      description: "Enables dark mode for the tabs.",
      defaultValue: false,
    },
    tabs: {
      control: { type: "array" },
      description: "Array of tab names.",
      defaultValue: ["Tab 1", "Tab 2", "Tab 3"],
    },
  },
};

const Template = (args) => ({
  components: { RtTabs },
  setup() {
    return { args };
  },
  template: `<RtTabs v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  dark: false,
  tabs: ["Tab 1", "Tab 2", "Tab 3"],
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  color: "secondary",
  dark: true,
  tabs: ["Tab 1", "Tab 2", "Tab 3"],
};

export const CustomTabs = Template.bind({});
CustomTabs.args = {
  color: "teal",
  dark: false,
  tabs: ["Overview", "Details", "Settings"],
};
