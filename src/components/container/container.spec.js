import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import RtAlert from './alert.vue';

const vuetify = createVuetify({
  components,
  directives,
});

import ResizeObserver from 'resize-observer-polyfill';
globalThis.ResizeObserver = ResizeObserver;

test('renders RtAlert with props and slot content', () => {
  const wrapper = mount(RtAlert, {
    props: {
      type: 'success',
      value: true,
      border: 'Start',
      borderColor: 'green',
      color: 'light-green',
      icon: 'mdi-check-circle', // Provide a valid icon
    },
    global: {
      plugins: [vuetify],
    },
    slots: {
      default: 'This is a success alert!', // Content for the default slot
    },
  });

  // Assert the rendered text
  expect(wrapper.text()).toContain('This is a success alert!');

  // Assert the presence of the icon
  const icon = wrapper.find('.v-icon'); // Use Vuetify's v-icon class
  expect(icon.exists()).toBe(true);
  expect(icon.classes()).toContain('mdi-check-circle'); // Check for the icon class

  // Assert the color and other props are passed correctly
  const alert = wrapper.find('.v-alert'); // Use Vuetify's rendered v-alert class
  expect(alert.exists()).toBe(true);

  // Check that the `v-alert` has the class corresponding to the color prop
  expect(alert.classes()).toContain('bg-light-green'); // Check for Vuetify's color class
});
