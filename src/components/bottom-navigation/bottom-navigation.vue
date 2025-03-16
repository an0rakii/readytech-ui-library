<template>
  <v-bottom-navigation
    v-model="currentTab"
    :background-color="backgroundColor"
    :color="textColor"
    app
    class="v-bottom-navigation-wrapper"
    role="navigation"
    :aria-label="ariaLabel"
  >
    <RtButton
      v-for="(tab, index) in tabs"
      :key="index"
      :value="tab.value"
      :aria-label="tab.value + ' tab'"
      :icon="true"
      @click="onTabClick(tab)"
      :aria-selected="currentTab === tab.value ? 'true' : 'false'"
      role="tab"
      class="v-btn-item"
    >
      <RtIcon :icon="tab.icon" :size="24"></RtIcon>
    </RtButton>
  </v-bottom-navigation>
</template>

<script>
import RtIcon from '../icon/icon.vue';
import RtButton from '../button/button.vue';
export default {
  name: "RtBottomNavigation",
  components: {
    RtIcon,
    RtButton,
  },
  props: {
    ariaLabel: {
      type: String,
      default: "Bottom Navigation",
    },
    tabs: {
      type: Array,
      default: () => [
        { value: "home", icon: "mdi-home" },
        { value: "favorites", icon: "mdi-heart" },
        { value: "settings", icon: "mdi-cog" },
      ],
    },
    backgroundColor: {
      type: String,
      default: "primary",
    },
    textColor: {
      type: String,
      default: "white",
    },
    initialTab: {
      type: String,
      default: "home",
    },
  },
  data() {
    return {
      currentTab: this.initialTab,
    };
  },
  methods: {
    onTabClick(tab) {
      this.$emit("tabSelected", tab.value);
      this.currentTab = tab.value;  // Update the currentTab when a tab is selected
    },
  },
};
</script>

<style scoped>
.v-bottom-navigation-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.v-bottom-navigation-wrapper .v-bottom-navigation__content button.v-btn--selected .v-btn__content i{
  color: green;
}

.v-btn {
  text-transform: none;
}

.v-btn-item {
  border: none; /* Remove border if any */
}

.v-icon {
  font-size: 24px;
}

/* Focus Styles */
.v-btn-item:focus {
  outline: 2px solid #005fcc; /* High-contrast outline for better visibility */
  outline-offset: 4px;
}

/* High contrast for better visibility of focused items */
.v-btn-item:active {
  background-color: rgba(0, 0, 0, 0.1); /* Slightly darker background on active state */
}
</style>
