import RtFloatingButton from "./floating-button.vue";

export default {
  title: "Components/Floating Button",
  component: RtFloatingButton,
  argTypes: {
    absolute: {
      control: { type: "boolean" },
      description: "Whether the FAB button should be absolute.",
      defaultValue: false,
    },
    offset: {
      control: { type: "boolean" },
      description: "Whether the FAB button should be offset.",
      defaultValue: false,
    },
    color: {
      control: { type: "text" },
      description: "The color of the FAB button.",
      defaultValue: "primary",
    },
    icon: {
      control: { type: "text" },
      description: "Material Design icon name for the FAB button.",
      defaultValue: "mdi-plus",
    },
    size: {
      control: { type: "select" },
      options: ["x-small", "small", "default", "large", "x-large"],
      description: "Size of the FAB button.",
    },
    elevation: {
      control: { type: "number" },
      description: "Elevation level of the FAB button.",
      defaultValue: 4,
    },
    href: {
      control: { type: "text" },
      description: "Optional link for navigation.",
    },
  },
};

const Template = (args) => ({
  components: { RtFloatingButton },
  setup() {
    return { args };
  },
  template: `<RtFloatingButton v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  icon: "mdi-plus",
  size: "large",
  elevation: 4,
  offset: false,
  absolute: false,
};

export const CustomFab = Template.bind({});
CustomFab.args = {
  color: "secondary",
  icon: "mdi-pencil",
  size: "x-large",
  elevation: 8,
  href: "#",
  offset: true,
  absolute: true,
};
