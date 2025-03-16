import RtMenu from "./menu.vue";

export default {
  title: "Components/Menu",
  component: RtMenu,
  argTypes: {
    location: { control: 'select', options: ["top", "bottom", "start", "end", "center"] },
    items: {
      control: { type: "array" },
      description: "The list of items displayed in the menu.",
    },
    offsetY: {
      control: { type: "boolean" },
      description: "Whether the menu is offset on the Y-axis.",
    },
    zIndex: {
      control: { type: "number" },
      description: "The z-index of the menu.",
    },
    itemSelected: {
      action: "itemSelected",
      description: "Event emitted when an item is selected.",
    },
  },
};

const Template = (args) => ({
  components: { RtMenu },
  setup() {
    return { args };
  },
  template: `<RtMenu v-bind="args" @itemSelected="args.itemSelected" />`,
});

export const Default = Template.bind({});
Default.args = {
  items: ["Option 1", "Option 2", "Option 3"],
  offsetY: true,
  location: "top",
  zIndex: 10,
};

export const CustomItems = Template.bind({});
CustomItems.args = {
  items: ["Custom 1", "Custom 2", "Custom 3", "Custom 4"],
  offsetY: false,
  zIndex: 20,
};
