<template>
  <v-btn
    type="button"
    :variant="variant"
    :size="size"
    :color="color"
    :icon="icon"
    :disabled="disabled"
    :loading="loading"
    :outlined="outlined"
    :text="text"
    :tile="tile"
    :depressed="depressed"
    :rounded="rounded"
    :block="block"
    :href="href"
    :target="target"
    :elevation="elevation"
    :to="to"
    :replace="replace"
    :exact="exact"
    :append="append"
    :background-color="backgroundColor"
    :class="buttonClasses"
    @click="onClick"
    :aria-label="ariaLabel"
  >
    <!-- Default slot for custom content -->
    <slot>{{ label }}</slot>
  </v-btn>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'RtButton',

  props: {
    // Button text label
    label: {
      type: String,
      default: 'Click Me',
    },
    // Primary styling
    primary: {
      type: Boolean,
      default: false,
    },
    // Button size
    size: {
      type: String,
      default: 'default',
      validator: (value) => ['x-small', 'small', 'default', 'large', 'x-large'].includes(value),
    },
    // Button color
    color: {
      type: String,
      default: 'primary',
    },
    // Custom background color
    backgroundColor: {
      type: String,
    },
    // Icon button
    icon: {
      type: Boolean,
      default: false,
    },
    // Disabled state
    disabled: {
      type: Boolean,
      default: false,
    },
    // Loading state
    loading: {
      type: Boolean,
      default: false,
    },
    // Outlined style
    outlined: {
      type: Boolean,
      default: false,
    },
    // Text style
    text: {
      type: String,
      default: '',
    },
    // Tile shape (square edges)
    tile: {
      type: Boolean,
      default: false,
    },
    // Depressed style (no shadow)
    depressed: {
      type: Boolean,
      default: false,
    },
    // Rounded corners
    rounded: {
      type: Boolean,
      default: false,
    },
    // Full-width button
    block: {
      type: Boolean,
      default: false,
    },
    // Link properties
    href: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '_self',
    },
    to: {
      type: [String, Object],
      default: null,
    },
    replace: {
      type: Boolean,
      default: false,
    },
    exact: {
      type: Boolean,
      default: false,
    },
    append: {
      type: Boolean,
      default: false,
    },
    // Button elevation (shadow)
    elevation: {
      type: [Number, String],
      default: 2,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    // Emit click event
    const onClick = () => {
      emit('click');
    };

    // Compute button variant
    const variant = computed(() => (props.primary ? 'flat' : 'outlined'));

    // Compute ARIA label for accessibility
    const ariaLabel = computed(() => props.label || 'Button');

    // Dynamic button classes based on props
    const buttonClasses = computed(() => ({
      'btn-primary': props.primary,
      'btn-icon': props.icon,
      'btn-disabled': props.disabled,
    }));

    return {
      onClick,
      variant,
      ariaLabel,
      buttonClasses,
    };
  },
};

</script>

<style scoped>
/* Example custom button styles */
.btn-primary {
  background-color: #1976d2;
  color: white;
}

.btn-primary:hover {
  background-color: #1565c0;
}

.btn-icon {
  padding: 0;
  width: 48px;
  height: 48px;
}

.btn-disabled {
  opacity: 0.6;
  pointer-events: none;
}
</style>
