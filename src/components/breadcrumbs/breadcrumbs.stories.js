import RtBreadcrumbs from "./breadcrumbs.vue";

export default {
  title: "Components/Breadcrumbs",
  component: RtBreadcrumbs,
  argTypes: {
    items: {
      control: { type: "array" },
      description: "Array of breadcrumb items with `text` and optional `to` properties.",
    },
    divider: {
      control: { type: "text" },
      description: "The divider symbol between breadcrumb items.",
    },
  },
};

const Template = (args) => ({
  components: { RtBreadcrumbs },
  setup() {
    return { args };
  },
  template: `<RtBreadcrumbs v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: "Home", to: "/" },
    { text: "Products", to: "/products" },
    { text: "Details", to: null },
  ],
  divider: "/",
};

export const CustomBreadcrumbs = Template.bind({});
CustomBreadcrumbs.args = {
  items: [
    { text: "Dashboard", to: "/dashboard" },
    { text: "Reports", to: "/reports" },
    { text: "Annual Report", to: null },
  ],
  divider: ">",
};
