import RtFileUpload from "./file-input.vue";

export default {
  title: "form/File Upload",
  component: RtFileUpload,
  argTypes: {
    modelValue: {
      control: "object",
      description: "The selected file(s). Supports single File or Array of Files.",
    },
    label: {
      control: "text",
      description: "The label for the file input.",
    },
    placeholder: {
      control: "text",
      description: "The placeholder text for the input.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the file input when true.",
    },
    clearable: {
      control: "boolean",
      description: "Allows the input to be cleared when true.",
    },
    multiple: {
      control: "boolean",
      description: "Allows multiple file selection when true.",
    },
    accept: {
      control: "text",
      description: "Restricts the types of files that can be uploaded (e.g., `.pdf,.docx` or `image/*`).",
    },
    error: {
      control: "boolean",
      description: "Displays an error state when true.",
    },
    errorMessages: {
      control: "array",
      description: "Displays error messages below the input.",
    },
    uploadAction: {
      action: "uploadAction",
      description: "A function triggered when the upload button is clicked.",
    },
    showSize: {
      control: "boolean",
      description: "Displays the file size next to the file name when true.",
    },
  },
};

const Template = (args) => ({
  components: { RtFileUpload },
  setup() {
    return { args };
  },
  template: '<RtFileUpload v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: [],
  label: "Upload Files",
  placeholder: "Choose files",
  clearable: true,
};

export const SingleFile = Template.bind({});
SingleFile.args = {
  modelValue: null,
  label: "Upload a File",
  placeholder: "Choose a file",
  multiple: false,
  clearable: true,
  accept: ".pdf",
};

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  modelValue: [],
  label: "Upload Multiple Files",
  placeholder: "Choose files",
  multiple: true,
  clearable: true,
  accept: ".png,.jpg,.jpeg",
};

export const Disabled = Template.bind({});
Disabled.args = {
  modelValue: [],
  label: "Disabled File Upload",
  placeholder: "Choose files",
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  modelValue: null,
  label: "Upload with Error",
  placeholder: "Choose a file",
  error: true,
  errorMessages: ["File is required."],
};

export const WithCustomUploadAction = Template.bind({});
WithCustomUploadAction.args = {
  modelValue: [],
  label: "Upload Files with Action",
  placeholder: "Choose files",
  multiple: true,
  clearable: true,
  uploadAction: (files) => {
    console.log("Uploading files:", files);
    alert(`Uploading ${files.length} file(s)`);
  },
};
