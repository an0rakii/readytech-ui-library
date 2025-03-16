<template>
  <v-select
    v-bind="$attrs"
    :items="computedItems"
    item-title="text"
    item-value="value"
    v-model="selectedItem"
    :label="label"
    :density="density"
    :outlined="outlined"
    :chips="chips"
    :multiple="multiple"
    :placeholder="placeholder"
    :disabled="disabled"
    :error="error"
    :error-messages="errorMessages"
    :menu-props="menuProps"
    @update:modelValue="handleSelection"
  />
</template>

<script>
export default {
  name: 'RtSelect',
  props: {
    items: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    density: {
      type: String,
      default: 'compact',
      validator(value) {
        return ['comfortable', 'compact', 'default'].includes(value);
      }
    },
    chips: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedItem: [],
    };
  },
  computed: {
    computedItems() {
      if (this.multiple) {
        return [{ text: 'Select All', value: 'all' }, ...this.items];
      }
      return this.items;
    }
  },
  methods: {
    handleSelection(value) {
      if (this.multiple && value.includes('all')) {
        if (this.selectedItem.length === this.items.length + 1) {
          this.selectedItem = [];
        } else {
          this.selectedItem = this.items.map(item => item.value);
        }
      }
    }
  }
};
</script>

<style scoped>
/* Optional custom styling */
</style>
