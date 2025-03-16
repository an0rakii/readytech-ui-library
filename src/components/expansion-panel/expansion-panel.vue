<template>
  <v-expansion-panels
    v-bind="$attrs"
    :multiple="multiple"
    :variant="variant"
    :disabled="disabled"
    role="region"
    aria-multiselectable="multiple"
  >
    <v-expansion-panel
      v-for="(item, index) in items"
      :key="index"
      role="group"
    >
      <v-expansion-panel-title
        role="button"
        :aria-expanded="isExpanded(index)"
        :id="'panel-header-' + index"
        :aria-controls="'panel-content-' + index"
        @click="togglePanel(index)"
        tabindex="0"
        @keydown.space.stop.prevent="togglePanel(index)"
        @keydown.enter.stop.prevent="togglePanel(index)"
        @keydown.arrow-up.stop.prevent="focusPrevious(index)"
        @keydown.arrow-down.stop.prevent="focusNext(index)"
        @keydown.home.stop.prevent="focusFirst()"
        @keydown.end.stop.prevent="focusLast()"
      >
        <template #default>
          <span>{{ item.title }}</span>
        </template>
        <template #actions>
          <v-icon v-if="!disabled" :aria-hidden="true">
            {{ isExpanded(index) ? collapseIcon : expandIcon }}
          </v-icon>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text
        v-show="isExpanded(index)"
        :id="'panel-content-' + index"
        :aria-labelledby="'panel-header-' + index"
        role="region"
      >
        {{ item.content }}
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "RtExpansionComponent",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
    variant: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "accordion", "inset", "popout"].includes(value);
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    expandIcon: {
      type: String,
      default: "mdi-chevron-down",
    },
    collapseIcon: {
      type: String,
      default: "mdi-chevron-up",
    },
  },
  data() {
    return {
      expandedPanels: new Set(),
    };
  },
  methods: {
    isExpanded(index) {
      return this.expandedPanels.has(index);
    },
    togglePanel(index) {
      if (this.multiple) {
        this.expandedPanels.has(index)
          ? this.expandedPanels.delete(index)
          : this.expandedPanels.add(index);
      } else {
        this.expandedPanels = new Set(
          this.expandedPanels.has(index) ? [] : [index]
        );
      }
    },
    focusPrevious(index) {
      const prevIndex = index > 0 ? index - 1 : this.items.length - 1;
      document.getElementById(`panel-header-${prevIndex}`).focus();
    },
    focusNext(index) {
      const nextIndex = index < this.items.length - 1 ? index + 1 : 0;
      document.getElementById(`panel-header-${nextIndex}`).focus();
    },
    focusFirst() {
      document.getElementById("panel-header-0").focus();
    },
    focusLast() {
      const lastIndex = this.items.length - 1;
      document.getElementById(`panel-header-${lastIndex}`).focus();
    },
  },
};
</script>

<style scoped>
/* Add styles for focus indicators */
[v-expansion-panel-title]:focus {
  outline: 2px solid #0078d4;
}
</style>
