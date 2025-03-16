import RtOverlay from "./overlay.vue";

export default {
  title: "Components/Overlay",
  component: RtOverlay,
  argTypes: {
    zIndex: {
      control: { type: "number" },
      description: "The z-index of the overlay.",
    },
  },
};

const Template = (args) => ({
  components: { RtOverlay },
  setup() {
    return { args };
  },
  template: `<RtOverlay v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  zIndex: 10,
};

export const CustomZIndex = Template.bind({});
CustomZIndex.args = {
  zIndex: 50,
};
