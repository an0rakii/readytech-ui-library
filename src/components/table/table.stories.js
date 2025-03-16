import RtTable from "./table.vue";

export default {
  title: "Components/Table",
  component: RtTable,
  argTypes: {
    itemsPerPage: {
      control: { type: "number" },
      description: "Number of items per page",
      defaultValue: 10,
    },
    totalItems: {
      control: { type: "number" },
      description: "Total number of items available",
      defaultValue: 50,
    },
  },
};

const Template = (args) => ({
  components: { RtTable },
  setup() {
    return { args };
  },
  template: `<RtTable v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  itemsPerPage: 10,
  totalItems: 50,
};

export const CustomItemsPerPage = Template.bind({});
CustomItemsPerPage.args = {
  itemsPerPage: 5,
  totalItems: 30,
};

export const LargeDataSet = Template.bind({});
LargeDataSet.args = {
  itemsPerPage: 20,
  totalItems: 200,
};
