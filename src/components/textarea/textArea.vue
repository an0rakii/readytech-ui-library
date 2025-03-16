<template>
    <v-textarea
      v-bind="inputProps"
      @input="handleInput"
      :label="label"
      :rows="rows"
      :disabled="disabled"
      :placeholder="placeholder"
      :model-value="modelValue"
      :prepend-icon="prependIcon"
      :clearable="clearable"
      :autocomplete="autocomplete"
      :style="textareaStyle"
    />
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  // Define props for the component
  const props = defineProps({
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'Enter text', // Default label text
    },
    placeholder: {
      type: String,
      default: 'Type something...', // Default placeholder text
    },
    rows: {
      type: Number,
      default: 4, // Default row count
    },
    disabled: {
      type: Boolean,
      default: false, // Default to not disabled
    },
    prependIcon: {
      type: String,
      default: '', // Default to no icon
    },
    clearable: {
      type: Boolean,
      default: false, // Default is not clearable
    },
    autocomplete: {
        type: String,
        default: 'off', // Default is 'off'
    },
    backgroundColor: {
        type: String,
        default: '', // Default to no background color
    },
    color: {
        type: String,
        default: '', // Default to no text color
    }
  });
  
  // Emit events
  const emit = defineEmits(['update:modelValue']);
  
  // Handle input changes
  const handleInput = (value) => {
    emit('update:modelValue', value); // Update modelValue
  };
  
  // Props passed to the Vuetify v-textarea component
  const inputProps = {
    modelValue: props.modelValue,
    placeholder: props.placeholder,
    rows: props.rows,
    disabled: props.disabled,
    autocomplete: props.autocomplete,
    prependIcon: props.prependIcon,
    clearable: props.clearable,
  };

  // Compute style based on background color and text color props
  const textareaStyle = {
    backgroundColor: props.backgroundColor || '',  // Use provided background color or default
    color: props.color || '',  // Use provided color or default
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles for your component here */
  </style>
  