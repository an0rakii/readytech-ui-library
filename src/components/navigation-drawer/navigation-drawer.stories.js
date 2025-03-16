import RtNavigationDrawer from "./navigation-drawer.vue";

export default {
  title: "Components/Navigation Drawer",
  component: RtNavigationDrawer,
  argTypes: {
    location: { 
        control: 'select',
        options: ["left", "right"],
        defaultValue: "left"
    },
    rail: {
      control: { type: "boolean" },
      description: "If true, the drawer will be a rail.",
      defaultValue: false,
    },
    floating: {
      control: { type: "boolean" },
      description: "If true, the drawer will float over the content.",
      defaultValue: false,
    },
    temporary: {
      control: { type: "boolean" },
      description: "If true, the drawer will overlay the content.",
      defaultValue: false,
    },
    right: {
      control: { type: "boolean" },
      description: "Align the drawer to the right side.",
      defaultValue: false,
    },
    color: {
      control: { type: "text" },
      description: "Background color of the drawer.",
      defaultValue: "primary",
    },
    width: {
      control: { type: "number" },
      description: "Width of the drawer in pixels.",
      defaultValue: 256,
    },
    title: {
      control: { type: "text" },
      description: "Title displayed at the top of the drawer.",
      defaultValue: "Navigation",
    },
    items: {
      control: { type: "object" },
      description: "Array of navigation items with title, href, and icon.",
      defaultValue: [
        { title: "Home", href: "/", icon: "mdi-home" },
        { title: "About", href: "/about", icon: "mdi-information" },
        { title: "Contact", href: "/contact", icon: "mdi-phone" },
      ],
    },
  },
};

const Template = (args) => ({
  components: { RtNavigationDrawer },
  setup() {
    return { args };
  },
  template: `<RtNavigationDrawer v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  temporary: false,
  right: false,
  color: "primary",
  width: 256,
  title: "Navigation",
  items: [
    { title: "Home", href: "/", icon: "mdi-home" },
    { title: "About", href: "/about", icon: "mdi-information" },
    { title: "Contact", href: "/contact", icon: "mdi-phone" },
  ],
};

export const RightDrawer = Template.bind({});
RightDrawer.args = {
  temporary: false,
  right: false,
  color: "primary",
  width: 256,
  title: "Navigation",
  items: [
    { title: "Home", href: "/", icon: "mdi-home" },
    { title: "About", href: "/about", icon: "mdi-information" },
    { title: "Contact", href: "/contact", icon: "mdi-phone" },
  ],
  location: "right"
};

export const FloatingDrawer = Template.bind({});
FloatingDrawer.args = {
  temporary: false,
  right: false,
  color: "primary",
  width: 256,
  title: "Navigation",
  items: [
    { title: "Home", href: "/", icon: "mdi-home" },
    { title: "About", href: "/about", icon: "mdi-information" },
    { title: "Contact", href: "/contact", icon: "mdi-phone" },
  ],
  floating: true,
};

export const RailDrawer = Template.bind({});
RailDrawer.args = {
  temporary: false,
  right: false,
  color: "primary",
  width: 256,
  title: "Navigation",
  items: [
    { title: "Home", href: "/", icon: "mdi-home" },
    { title: "About", href: "/about", icon: "mdi-information" },
    { title: "Contact", href: "/contact", icon: "mdi-phone" },
  ],
  rail: true,
};

export const TemporaryDrawer = Template.bind({});
TemporaryDrawer.args = {
  ...Default.args,
  temporary: true,
};

export const RightAlignedDrawer = Template.bind({});
RightAlignedDrawer.args = {
  ...Default.args,
  right: true,
};
