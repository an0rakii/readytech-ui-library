import { ref } from "vue";
import RtComboBox from "./combo-box.vue";

export default {
  title: "Form/Combo Box",
  component: RtComboBox,
  argTypes: {
    modelValue: { control: "text" },
    items: { control: "array" },
    label: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    chips: { control: "boolean" },
    clearable: { control: "boolean" },
    multiple: { control: "boolean" },
    error: { control: "boolean" },
    errorMessages: { control: "text" },
    density: { control: "select", options: ["default", "compact", "comfortable"] },
    readonly: { control: "boolean" },
    ariaLabel: { control: "text" },
    errorId: { control: "text" },
  },
};

const Template = (args) => ({
  components: { RtComboBox },
  setup() {
    const modelValue = ref(args.modelValue); // Reactive modelValue for two-way binding
    const handleUpdate = (value) => {
      modelValue.value = value; // Update the reactive value
      args.modelValue = value; // Sync with args for Storybook controls
    };
    return { args, modelValue, handleUpdate };
  },
  template: `
    <RtComboBox
      v-bind="args"
      v-model="modelValue"
      @update:modelValue="handleUpdate"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: "",
  items: ["Option 1", "Option 2", "Option 3"],
  label: "Default ComboBox",
  placeholder: "Select an option",
  disabled: false,
  clearable: false,
  multiple: false,
  error: false,
  errorMessages: "",
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  modelValue: [],
  items: ["Option 1", "Option 2", "Option 3"],
  label: "Multi-select ComboBox",
  placeholder: "Select options",
  disabled: false,
  clearable: true,
  multiple: true,
  error: false,
  errorMessages: "",
};

export const Disabled = Template.bind({});
Disabled.args = {
  modelValue: "",
  items: ["Option 1", "Option 2", "Option 3"],
  label: "Disabled ComboBox",
  placeholder: "Cannot select",
  disabled: true,
  clearable: false,
  multiple: false,
  error: false,
  errorMessages: "",
};

export const WithError = Template.bind({});
WithError.args = {
  modelValue: "",
  items: ["Option 1", "Option 2", "Option 3"],
  label: "ComboBox with Error",
  placeholder: "Select an option",
  disabled: false,
  clearable: false,
  multiple: false,
  error: true,
  errorMessages: "This field is required",
};

export const Clearable = Template.bind({});
Clearable.args = {
  modelValue: "",
  items: ["Option 1", "Option 2", "Option 3"],
  label: "Clearable ComboBox",
  placeholder: "Select an option",
  disabled: false,
  clearable: true,
  multiple: false,
  error: false,
  errorMessages: "",
};

export const DefaultDensity = Template.bind({});
DefaultDensity.args = {
  modelValue: "",
  items: ["Option 1", "Option 2", "Option 3"],
  label: "Default Density ComboBox",
  placeholder: "Select an option",
  disabled: false,
  clearable: true,
  multiple: false,
  error: false,
  errorMessages: "",
  density: "default",
};

export const CompactDensity = Template.bind({});
CompactDensity.args = {
  modelValue: "",
  items: ["Option 1", "Option 2", "Option 3"],
  label: "Compact Density ComboBox",
  placeholder: "Select an option",
  disabled: false,
  clearable: true,
  multiple: false,
  error: false,
  errorMessages: "",
  density: "compact",
};

export const ComfortableDensity = Template.bind({});
ComfortableDensity.args = {
  modelValue: "",
  items: ["Option 1", "Option 2", "Option 3"],
  label: "Comfortable Density ComboBox",
  placeholder: "Select an option",
  disabled: false,
  clearable: true,
  multiple: false,
  error: false,
  errorMessages: "",
  density: "comfortable",
};

export const MultipleChips = Template.bind({});
MultipleChips.args = {
  modelValue: [],
  items: ["Option 1", "Option 2", "Option 3"],
  label: "Chips ComboBox",
  placeholder: "Select options",
  chips: true,
  multiple: true,
};

export const Readonly = Template.bind({});
Readonly.args = {
  modelValue: ["Option 1", "Option 2", "Option 3"],
  items: ["Option 1", "Option 2", "Option 3"],
  label: "Readonly ComboBox",
  placeholder: "Cannot select",
  readonly: true,
  multiple: true,
  chips: true,
};

export const AriaLabel = Template.bind({});
AriaLabel.args = {
  modelValue: "",
  items: ["Option 1", "Option 2", "Option 3"],
  label: "Aria Label ComboBox",
  placeholder: "Select an option",
  ariaLabel: "Aria Label",
};

export const ErrorId = Template.bind({});
ErrorId.args = {
  modelValue: "",
  items: ["Option 1", "Option 2", "Option 3"],
  label: "Error Id ComboBox",
  placeholder: "Select an option",
  errorId: "error-messages",
};
