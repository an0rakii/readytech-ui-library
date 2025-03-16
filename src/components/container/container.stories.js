import VuetifyContainer from "../container/container.vue";

export default {
  title: "Components/Container  ",
  component: VuetifyContainer,
  argTypes: {
    fluid: { control: "boolean" },
    containerClass: { control: "text" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { VuetifyContainer },
  props: Object.keys(argTypes),
  template: '<VuetifyContainer v-bind="$props"> <p>Content inside Vuetify Container</p> </VuetifyContainer>',
});

export const Default = Template.bind({});
Default.args = {
  fluid: false,
  containerClass: "",
};

export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true,
  containerClass: "",
};
