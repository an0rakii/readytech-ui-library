import RtPagination from "./pagination.vue";

export default {
  title: "Components/Pagination",
  component: RtPagination,
  argTypes: {
    rounded: {
      control: { type: "boolean" },
      description: "Whether the pagination component is rounded.",
      defaultValue: false,
    },
    length: {
      control: { type: "number" },
      description: "Total number of pages.",
      defaultValue: 10,
    },
    totalVisible: {
      control: { type: "number" },
      description: "Number of visible pages in the pagination bar.",
      defaultValue: 5,
    },
    color: {
      control: { type: "text" },
      description: "Color of the pagination component.",
      defaultValue: "primary",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the pagination component is disabled.",
      defaultValue: false,
    },
  },
};

const Template = (args) => ({
  components: { RtPagination },
  setup() {
    return { args };
  },
  template: `<RtPagination v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  length: 10,
  totalVisible: 5,
  color: "primary",
  disabled: false,
};

export const RoundedPagination = Template.bind({});
RoundedPagination.args = {
  length: 10,
  totalVisible: 5,
  color: "primary",
  disabled: false,
  rounded: true,
};

export const DisabledPagination = Template.bind({});
DisabledPagination.args = {
  ...Default.args,
  disabled: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  color: "success",
};
