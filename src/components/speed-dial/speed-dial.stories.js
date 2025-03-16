import RtSpeedDial from "./speed-dial.vue";

export default {
  title: "Components/SpeedDial",
  component: RtSpeedDial,
  argTypes: {
    location: {
      control: { type: "text" },
      description: "Location of the speed dial.",
      defaultValue: "left bottom",
    },
    color: {
      control: { type: "text" },
      description: "Color of the main FAB button.",
      defaultValue: "primary",
    },
    fabSize: {
      control: { type: "select" },
      options: ["small", "default", "large"],
      description: "Size of the main FAB button.",
      defaultValue: "large",
    },
    direction: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
      description: "Direction of speed dial expansion.",
      defaultValue: "top",
    },
    transition: {
      control: { type: "text" },
      description: "Transition for speed dial items.",
      defaultValue: "scale-transition",
    },
    icon: {
      control: { type: "text" },
      description: "Icon for the main FAB button.",
      defaultValue: "mdi-plus",
    },
    actions: {
      control: false,
      description: "Array of action buttons for the speed dial.",
    },
  },
};

const Template = (args) => ({
  components: { RtSpeedDial },
  setup() {
    return { args };
  },
  template: `<RtSpeedDial v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  fabSize: "large",
  direction: "top",
  transition: "scale-transition",
  icon: "mdi-plus",
  actions: [
    { icon: "mdi-pencil", color: "secondary", onClick: () => alert("Edit action clicked") },
    { icon: "mdi-delete", color: "red", onClick: () => alert("Delete action clicked") },
    { icon: "mdi-share", color: "green", onClick: () => alert("Share action clicked") },
  ],
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  color: "success",
};

export const HorizontalExpansion = Template.bind({});
HorizontalExpansion.args = {
  ...Default.args,
  direction: "right",
};
