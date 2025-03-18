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
        :prependIcon="prependIcon"
        :hint="hint"
        readonly
        v-bind="props"
      >
        <!-- Custom prepend icon inside the input field -->
        <template v-if="prependIcon" v-slot:prepend-inner>
          <v-icon>{{ prependIcon }}</v-icon>
        </template>
      </v-text-field>
    </template>

    <v-date-picker
      prepend-icon="mdi-calendar"
      v-model="date"
      @update:modelValue="onDateSelect"
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
    prependIcon: {
      type: String,
      default: "",
    },
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
    prependIcon: {
      type: String,
      default: "mdi-calendar", // Default icon for date input
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

    watch(
      () => props.modelValue,
      (newValue) => {
        date.value = newValue;
      }
    );

    return {
      menu,
      date,
      formattedDate,
      onDateSelect,
    };
  },
};
</script>

<style scoped>
/* Hide the default Vuetify prepend icon wrapper */
::v-deep(.v-input__prepend) {
  display: none !important;
}
/* Hide the default Vuetify append icon wrapper */
::v-deep(.v-input__append) {
  display: none !important;
}
/* Add optional styling here if needed */
</style>