import RtSheet from "./sheet.vue";

export default {
  title: "Components/Sheet",
  component: RtSheet,
  argTypes: {
    rounded: {
      control: { type: "boolean" },
      description: "Whether the sheet should have rounded corners.",
    },
    elevation: {
      control: { type: "number" },
      description: "The elevation of the sheet (e.g., shadow depth).",
    },
    color: {
      control: { type: "color" },
      description: "Background color of the sheet.",
    },
  },
};

const Template = (args) => ({
  components: { RtSheet },
  setup() {
    return { args };
  },
  template: `<RtSheet v-bind="args">This is a VSheet component.</RtSheet>`,
});

export const Default = Template.bind({});
Default.args = {
  elevation: 2,
  color: "grey lighten-3",
  rounded: false
};

export const CustomElevation = Template.bind({});
CustomElevation.args = {
  elevation: 8,
  color: "#FFCDD2", // Light red
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  elevation: 4,
  color: "#C8E6C9", // Light green
};
