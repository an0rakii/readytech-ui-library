<template>
  <v-dialog
    :fullscreen="fullscreen"
    :hide-overlay="hideOverlay"
    :max-width="maxWidth"
    :persistent="persistent"
    :retain-focus="false" 
    :scrollable="scrollable"
    :transition="transition"
    :value="dialogVisible"
    v-model="dialogVisible"
    role="dialog"
    aria-labelledby="dialog-title"
    aria-modal="true"
    @keydown.esc="closeDialog"
  >
    <template v-slot:activator="{ on, attrs }">
      <RtButton v-bind="attrs" v-on="on" @click="openDialog" ref="activator">
        Open Dialog
      </RtButton>
    </template>
    <v-card>
      <v-card-title class="headline" id="dialog-title">Dialog Title</v-card-title>

      <v-card-text>
        This is the content of the dialog.
      </v-card-text>

      <v-card-actions>
        <RtButton
          color="green"
          text
          @click="closeDialog"
        >
          Close
        </RtButton>
        <RtButton
          color="red"
          text
          @click="closeDialog"
        >
          Cancel
        </RtButton>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import RtButton from "../button/button.vue";
export default {
  name: "RtDialog",
  components: {
    RtButton,
  },
  props: {
    fullscreen: {
      type: Boolean,
      default: false,
    },
    hideOverlay: {
      type: Boolean,
      default: false,
    },
    maxWidth: {
      type: [Number, String],
      default: "none",
    },
    persistent: {
      type: Boolean,
      default: false,
    },
    retainFocus: {
      type: Boolean,
      default: true,
    },
    scrollable: {
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: "dialog-transition",
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogVisible: false, // Local state to control dialog visibility
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        const dialog = this.$el.querySelector("[role='dialog']");
        const focusableElements = this.getFocusableElements(dialog);
        if (focusableElements.length) {
          focusableElements[0].focus(); // Focus the first focusable element
        }
      });
    },
    closeDialog() {
      this.dialogVisible = false;
      this.$nextTick(() => {
        this.$refs.activator?.focus(); // Return focus to the activator
      });
    },
    getFocusableElements(container) {
      return container.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
    },
    trapFocus(event) {
      const dialog = this.$el.querySelector("[role='dialog']");
      const focusableElements = this.getFocusableElements(dialog);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.target === lastElement && !event.shiftKey) {
        event.preventDefault();
        firstElement.focus(); // Loop focus back to the first element
      } else if (event.target === firstElement && event.shiftKey) {
        event.preventDefault();
        lastElement.focus(); // Loop focus back to the last element
      }
    },
  },
  watch: {
    dialogVisible(visible) {
      if (visible) {
        document.addEventListener("keydown", this.trapFocus);
      } else {
        document.removeEventListener("keydown", this.trapFocus);
      }
    },
  },
};
</script>

<style scoped>
/* Add focus outline for better visibility */
[v-dialog] [tabindex]:focus {
  outline: 2px solid #0078d4;
}
</style>
