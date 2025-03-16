<template>
  <v-autocomplete
    v-model="selectedValue"
    :items="computedItems"
    item-title="text"
    item-value="value"
    :label="label"
    :clearable="clearable"
    :multiple="multiple"
    :loading="loading"
    :search-input.sync="searchInput"
    @update:modelValue="handleSelection"
    @update:search-input="onSearch"
    @change="onChange"
  >
    <template v-slot:append-item>
      <v-btn v-if="appendButton" @click="onAppendClick">{{ appendButton }}</v-btn>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  name: 'RtSelectAutocomplete',
  props: {
    label: {
      type: String,
      default: 'Select an option',
    },
    items: {
      type: Array,
      required: true,
      validator(value) {
        return value.every(item => item.hasOwnProperty('text') && item.hasOwnProperty('value'));
      }
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    appendButton: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selectedValue: this.multiple ? [] : null,
      searchInput: '',
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
        if (this.selectedValue.length === this.items.length + 1) {
          this.selectedValue = [];
        } else {
          this.selectedValue = this.items.map(item => item.value);
        }
      } else {
        this.selectedValue = value;
      }
      this.$emit('update:modelValue', this.selectedValue);
    },
    onSearch(searchText) {
      this.$emit('search', searchText);
    },
    onChange(value) {
      this.$emit('change', value);
    },
    onAppendClick() {
      this.$emit('append-click');
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
