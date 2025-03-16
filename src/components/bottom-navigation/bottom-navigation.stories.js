import RtBottomNavigation from "./bottom-navigation.vue";

export default {
  title: "Components/BottomNavigation",
  component: RtBottomNavigation,
  argTypes: {
    ariaLabel: {
      control: { type: "text" },
      description: "Aria label for the bottom navigation.",
    },
    tabs: {
      control: { type: "array" },
      description: "Array of tabs with `value` and `icon` properties.",
    },
    backgroundColor: {
      control: { type: "color" },
      description: "Background color of the bottom navigation.",
    },
    textColor: {
      control: { type: "color" },
      description: "Text color of the bottom navigation.",
    },
    initialTab: {
      control: { type: "text" },
      description: "Initial tab to be selected.",
    },
    tabSelected: {
      action: "tabSelected",
      description: "Event emitted when a tab is selected.",
    },
  },
};

const Template = (args) => ({
  components: { RtBottomNavigation },
  setup() {
    return { args };
  },
  template: `<RtBottomNavigation v-bind="args" @tabSelected="args.tabSelected" />`,
});

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { value: "home", icon: "mdi-home" },
    { value: "favorites", icon: "mdi-heart" },
    { value: "settings", icon: "mdi-cog" },
  ],
  backgroundColor: "primary",
  textColor: "white",
  ariaLabel: "Bottom Navigation",
  initialTab: "home",
};

export const CustomTabs = Template.bind({});
CustomTabs.args = {
  tabs: [
    { value: "dashboard", icon: "mdi-view-dashboard" },
    { value: "messages", icon: "mdi-message" },
    { value: "profile", icon: "mdi-account" },
  ],
  backgroundColor: "#6200ea",
  textColor: "#ffffff",
  initialTab: "dashboard",
  ariaLabel: "Bottom Navigation",
};
