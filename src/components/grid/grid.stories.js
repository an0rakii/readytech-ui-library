import RtGrid from './grid.vue';

export default {
  title: 'Components/Grid',
  component: RtGrid,
  argTypes: {
    breakpoints: { control: 'object' },
  },
};

const Template = (args) => ({
  components: { RtGrid },
  setup() {
    return { args };
  },
  template: '<RtGrid v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  breakpoints: [
    { label: "Default (cols: 12)", cols: 12 },
    { label: "Small (sm: 6)", cols: 12, sm: 6 },
    { label: "Medium (md: 4)", cols: 12, sm: 6, md: 4 },
    { label: "Large (lg: 3)", cols: 12, sm: 6, md: 4, lg: 3 },
    { label: "Extra Large (xl: 2)", cols: 12, sm: 6, md: 4, lg: 3, xl: 2 },
  ],
};

export const CustomBreakpoints = Template.bind({});
CustomBreakpoints.args = {
  breakpoints: [
    { label: "Full Width (cols: 12)", cols: 12 },
    { label: "Half Width (sm: 6)", cols: 12, sm: 6 },
    { label: "Quarter Width (md: 3)", cols: 12, sm: 6, md: 3 },
    { label: "One Sixth (lg: 2)", cols: 12, sm: 6, md: 3, lg: 2 },
    { label: "Custom Width (xl: 1)", cols: 12, sm: 6, md: 3, lg: 2, xl: 1 },
  ],
};
