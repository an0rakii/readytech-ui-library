<template>
  <v-alert
    :text="text"
    :type="icon"
    :border-color="borderColor"
    :color="color"
    :border="border"
    :variant="variant"
    :closable="closable"
    :density="density"
    role="alert"
    :aria-live="getAriaLive()"
    :aria-atomic="true"
  >
    <!-- Include optional icon with proper screen reader handling -->
    <template v-if="icon">
      <RtIcon left aria-hidden="true">{{ icon }}</RtIcon>
    </template>
    <!-- Alert content -->
    <span class="alert-content">
      <slot></slot>
    </span>
  </v-alert>
</template>

<script>
import RtIcon from '../icon/icon.vue';
export default {
  name: "RtAlert",
  components: {
    RtIcon,
  },
  props: {
    density: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "comfortable", "compact"].includes(value);
      },
    },
    closable: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: "flat",
      validator(value) {
        return ["plain", "outlined", "tonal", "flat", "elevated", "text" ].includes(value);
      },
    },
    text: {
      type: String,
      default: "",
    },
    border: {
      type: String,
      default: "Start",
      validator(value) {
        return ["start", "top", "end", "bottom", "none"].includes(value);
      },
    },
    icon: {
      type: String,
      default: "info",
      validator(value) {
        return ["info", "success", "error", "warning", "hidden"].includes(value);
      },
    },
    borderColor: {
      type: String,
      default: "info",
      validator(value) {
        return ["info", "success", "error", "warning", "deep-purple accent-4"].includes(value);
      },
    },
    color: {
      type: String,
      default: "info",
      validator(value) {
        return ["info", "success", "error", "warning", "hidden"].includes(value);
      },
    },
  },
  methods: {
    // Dynamically determine aria-live based on type
    getAriaLive() {
      if (this.type === "error" || this.type === "warning") {
        return "assertive"; // High priority announcements
      }
      return "polite"; // Normal priority announcements
    },
  },
};
</script>

<style scoped lang="scss">
  @use '../../styles/settings';

  .v-alert__close {
    height: 28px;
    width: 28px;
  }

.v-alert:focus {
  outline: 2px solid var(--alert-focus-color, #005fcc); /* Focus outline */
  outline-offset: 4px;
}

/* Add visual cues for type-specific alerts */
[v-alert][type="error"] {
  background-color: #ffe6e6; /* Error alert background */
  border-color: #cc0000; /* Error alert border */
  color: #cc0000; /* Error text color */
}

[v-alert][type="success"] {
  background-color: #e6ffe6; /* Success alert background */
  border-color: #008000; /* Success alert border */
  color: #008000; /* Success text color */
}

/* Adjust dense styling for readability */
[v-alert][dense] .alert-content {
  line-height: 1.4;
  font-size: 0.875rem; /* Slightly smaller text */
}
</style>
