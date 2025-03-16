import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import RtBottomSheet from './bottom-sheet.vue'; // Adjust the import path as necessary

// Create a Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});

import ResizeObserver from 'resize-observer-polyfill';
globalThis.ResizeObserver = ResizeObserver;

test('renders button with correct text', () => {
  const wrapper = mount(RtBottomSheet, {
    global: {
      plugins: [vuetify],
    },
  });

  const button = wrapper.find('.open-button');
  expect(button.exists()).toBe(true);
  expect(button.text()).toBe('Click Me');
});

test('toggles bottom sheet visibility on open button click', async () => {
  const wrapper = mount(RtBottomSheet, {
    global: {
      plugins: [vuetify],
    },
  });

  // Bottom sheet should be hidden initially
  let bottomSheet = wrapper.find('.v-bottom-sheet');
  expect(bottomSheet.exists()).toBe(false);

  // Click the open button to show the bottom sheet
  const openButton = wrapper.find('.open-button');
  await openButton.trigger('click');
  bottomSheet = wrapper.find('.v-bottom-sheet');
  expect(bottomSheet.exists()).toBe(true);  // Expect bottom sheet to be visible

  // Click the open button again to hide the bottom sheet
  await openButton.trigger('click');
  bottomSheet = wrapper.find('.v-bottom-sheet');
  expect(bottomSheet.exists()).toBe(false);  // Expect bottom sheet to be hidden
});

test('closes bottom sheet when close button is clicked', async () => {
  const wrapper = mount(RtBottomSheet, {
    global: {
      plugins: [vuetify],
    },
  });

  // Open the bottom sheet
  const openButton = wrapper.find('.open-button');
  await openButton.trigger('click');
  let bottomSheet = wrapper.find('.v-bottom-sheet');
  expect(bottomSheet.exists()).toBe(true);  // Bottom sheet should be visible

  // Click the close button inside the bottom sheet
  const closeButton = wrapper.find('.close-button');
  expect(closeButton.exists()).toBe(true); // Ensure the close button exists
  await closeButton.trigger('click');
  bottomSheet = wrapper.find('.v-bottom-sheet');
  expect(bottomSheet.exists()).toBe(false);  // Expect bottom sheet to be hidden after closing
});
