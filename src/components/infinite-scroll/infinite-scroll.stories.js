import RtInfiniteScroll from "./infinite-scroll.vue";

export default {
  title: "Components/Infinite Scroll",
  component: RtInfiniteScroll,
  argTypes: {
    itemsPerPage: {
      control: { type: "number" },
      description: "Number of items loaded per scroll",
      defaultValue: 10,
    },
    totalItems: {
      control: { type: "number" },
      description: "Total number of items available to load",
      defaultValue: 50,
    },
  },
};

const Template = (args) => ({
  components: { RtInfiniteScroll },
  setup() {
    return { args };
  },
  template: `<RtInfiniteScroll v-bind="args" />`,
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
