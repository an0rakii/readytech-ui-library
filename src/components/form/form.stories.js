import RtForm from "./form.vue";

export default {
  title: "Form/Form",
  component: RtForm,
  argTypes: {
    onSubmit: { action: "submit" },
  },
};

const Template = (args) => ({
  components: { RtForm },
  setup() {
    return { args };
  },
  template: '<RtForm v-bind="args" @submit="args.onSubmit" />',
});

export const Default = Template.bind({});
Default.args = {};
