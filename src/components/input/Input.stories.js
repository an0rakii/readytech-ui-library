import RtText from "./input.vue";

export default {
  title: "Form/Input",
  component: RtText,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    modelValue: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    errorMessages: { control: "text" },
    hint: { control: "text" },
    prependIcon: { control: "text" },
    clearable: { control: "boolean" },
    autocomplete: { control: "select", options: ["off", "on"] },
    clearable: { control: "boolean" },
  },
};

const Template = (args) => ({
  components: { RtText },
  setup() {
    return { args };
  },
  template: '<RtText v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Default Input",
  placeholder: "Enter text",
  modelValue: "",
  disabled: false,
  error: false,
  errorMessages: [],
  hint: "",
  prependIcon: "",
  clearable: false,
  autocomplete: "off",
  clearable: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Input",
  placeholder: "Can't type here",
  modelValue: "",
  disabled: true,
  prependIcon: "",
  clearable: false,
  autocomplete: "off",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Input with Error",
  placeholder: "Type carefully",
  modelValue: "",
  error: true,
  errorMessages: "This field is required",
  prependIcon: "",
  clearable: false,
  autocomplete: "off",
};

export const WithPrependIcon = Template.bind({});
WithPrependIcon.args = {
  label: "Input with Prepend Icon",
  placeholder: "Type here",
  modelValue: "",
  disabled: false,
  error: false,
  errorMessages: [],
  prependIcon: "mdi-search", // Example icon from Material Design Icons
  clearable: false,
  autocomplete: "off",
};

export const Clearable = Template.bind({});
Clearable.args = {
  label: "Clearable Input",
  placeholder: "You can clear this input",
  modelValue: "",
  disabled: false,
  error: false,
  errorMessages: [],
  prependIcon: "",
  clearable: true,
  autocomplete: "off",
};

export const Autocomplete = Template.bind({});
Autocomplete.args = {
  label: "Input with Autocomplete",
  placeholder: "Autocomplete enabled",
  modelValue: "",
  disabled: false,
  error: false,
  errorMessages: [],
  prependIcon: "",
  clearable: true,
  autocomplete: "on",
};
