<template>
    <v-menu
      v-model="menu"
      transition="scale-transition"
      close-on-content-click="false"
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ props }">
        <v-text-field
          v-on="on"
          v-model="formattedDate"
          :label="label"
          :placeholder="placeholder"
          :hint="hint"
          readonly
          v-bind="props"
        />
      </template>
      <v-date-picker
        prepend-icon="mdi-calendar"
        prepend-inner-icon="$calendar"
        v-model="date"
        @input="onDateSelect"
        :min="min"
        :max="max"
        :multiple="multiple"
      />
    </v-menu>
  </template>
  
  <script>
  import { ref, computed, watch } from "vue";
  
  export default {
    name: "RtDateInput",
    props: {
      label: {
        type: String,
        default: "Select Date",
      },
      hint: {
        type: String,
        default: "Enter date",
      },
      placeholder: {
        type: String,
        default: "",
      },
      multiple: {
          type: [String, Date],
          default: null,
      },
      modelValue: {
        type: [String, Date],
        required: true,
      },
      min: {
        type: String,
        default: null,
      },
      max: {
        type: String,
        default: null,
      },
    },
    emits: ["update:modelValue"],
    data() {
      return {
        menu: false,
        date: null,
      };
    },
    setup(props, { emit }) {
      const menu = ref(false);
      const date = ref(props.modelValue);
  
      const formattedDate = computed({
        get() {
          return date.value ? new Date(date.value).toLocaleDateString() : "";
        },
        set(newDate) {
          date.value = newDate ? new Date(newDate) : null;
        },
      });
  
      const onDateSelect = (selectedDate) => {
        emit("update:modelValue", selectedDate);
        menu.value = false;
      };
  
      watch(() => props.modelValue, (newValue) => {
        date.value = newValue;
      });
  
      return {
        menu,
        date,
        formattedDate,
        onDateSelect,
      };
    },
  };
  </script>
  