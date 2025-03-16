<template>
  <v-file-input
    v-bind="inputProps"
    v-model="selectedFiles"
    :label="label"
    :placeholder="placeholder"
    :disabled="disabled"
    :clearable="clearable"
    :multiple="multiple"
    :error="error"
    :error-messages="errorMessages"
    :accept="accept"
    :show-size="showSize"
    prepend-icon="mdi-file-upload"
  >
    <template v-slot:append>
      <v-btn
        v-if="uploadAction"
        :disabled="!selectedFiles || (multiple && selectedFiles.length === 0)"
        @click="handleUpload"
      >
        Upload
      </v-btn>
    </template>
  </v-file-input>
</template>

<script>
export default {
  name: "RtFileUpload",
  props: {
    modelValue: {
      type: [File, Array],
      default: () => ([]), // Default to an empty array
    },
    label: {
      type: String,
      default: "Upload Files",
    },
    placeholder: {
      type: String,
      default: "Select files...",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessages: {
      type: [String, Array],
      default: () => [],
    },
    accept: {
      type: String,
      default: "", // Accept all file types by default
    },
    showSize: {
      type: Boolean,
      default: false,
    },
    uploadAction: {
      type: Function,
      default: null, // Optional upload action
    },
  },
  computed: {
    selectedFiles: {
      get() {
        if (this.multiple) {
          return Array.isArray(this.modelValue) ? this.modelValue : [];
        }
        return this.modelValue instanceof File ? this.modelValue : null;
      },
      set(value) {
        if (this.multiple) {
          this.$emit("update:modelValue", value);
        } else {
          this.$emit("update:modelValue", value instanceof File ? value : null);
        }
      },
    },
    inputProps() {
      return { ...this.$props }; // Pass all props to v-file-input
    },
  },
  methods: {
    handleUpload() {
      if (this.uploadAction) {
        this.uploadAction(this.selectedFiles);
      }
    },
  },
};
</script>

<style scoped>
/* Optional styles */
</style>
