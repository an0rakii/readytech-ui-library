import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { createVuetify } from 'vuetify';
import RtButton from './button.vue';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

// Mock global ResizeObserver (required by Vuetify for some components)
global.ResizeObserver = require('resize-observer-polyfill');

// test('renders RtButton with label and default props', async () => {
//   const wrapper = mount(RtButton, {
//     props: {
//       label: 'Click Me', // Label for the button
//     },
//     global: {
//       plugins: [vuetify],
//     },
//   });

//   const button = wrapper.find('button');
//   expect(button.exists()).toBe(true);

//   // Assert the button label
//   const label = wrapper.find('span');
//   expect(label.exists()).toBe(true);
//   expect(label.text()).toBe('Click Me');
  
//   // Check default classes and attributes
//   expect(button.classes()).toContain('v-btn'); // Ensure it's a Vuetify button
//   expect(button.classes()).toContain('v-btn--size-default'); // Check default size class
//   expect(button.attributes('type')).toBe('button'); // Check type attribute
// });

// test('renders RtButton with custom color and size', async () => {
//   const wrapper = mount(RtButton, {
//     props: {
//       label: 'Custom Button',
//       color: 'red',
//       size: 'large',
//     },
//     global: {
//       plugins: [vuetify],
//     },
//   });

//   const button = wrapper.find('button');
//   expect(button.classes()).toContain('v-btn--sizelarge');
//   expect(button.classes()).toContain('red');
// });

test('renders RtButton as disabled', async () => {
  const wrapper = mount(RtButton, {
    props: {
      label: 'Disabled Button',
      disabled: true, // Button is disabled
    },
    global: {
      plugins: [vuetify],
    },
  });

  const button = wrapper.find('button');
  expect(button.classes()).toContain('v-btn--disabled'); // Check if the button has loading class
});

test('renders RtButton as loading', async () => {
  const wrapper = mount(RtButton, {
    props: {
      label: 'Loading Button',
      loading: true, // Button is loading
    },
    global: {
      plugins: [vuetify],
    },
  });

  const button = wrapper.find('button');
  expect(button.classes()).toContain('v-btn--loading'); // Check if the button has loading class
});

// test('renders RtButton with icon', async () => {
//   const wrapper = mount(RtButton, {
//     props: {
//       label: 'Button with Icon',
//       icon: 'mdi-cross', // Pass icon prop if needed
//     },
//     global: {
//       plugins: [vuetify],
//     },
//   });

//   const icon = wrapper.find('svg');
//   expect(icon.exists()).toBe(true); // Check for the presence of an icon
// });

test('emits click event when clicked', async () => {
  const wrapper = mount(RtButton, {
    props: {
      label: 'Click Me',
    },
    global: {
      plugins: [vuetify],
    },
  });

  // Ensure the button emits the 'click' event
  const button = wrapper.find('button');
  await button.trigger('click');
  expect(wrapper.emitted()).toHaveProperty('click');
});

// test('renders RtButton with custom background color', async () => {
//   const wrapper = mount(RtButton, {
//     props: {
//       label: 'Custom Background',
//       backgroundColor: 'blue', // Custom background color
//     },
//     global: {
//       plugins: [vuetify],
//     },
//   });

//   const button = wrapper.find('button');
//   expect(button.attributes('style')).toContain('background-color: blue');
// });

test('renders RtButton with href', async () => {
  const wrapper = mount(RtButton, {
    props: {
      label: 'Link Button',
      href: 'https://example.com',
    },
    global: {
      plugins: [vuetify],
    },
  });

  const button = wrapper.find('a'); // Since it has an href, it should render an <a> tag
  expect(button.exists()).toBe(true);
  expect(button.attributes('href')).toBe('https://example.com');
});

test('renders RtButton as block level button', async () => {
  const wrapper = mount(RtButton, {
    props: {
      label: 'Block Button',
      block: true, // Button is block level
    },
    global: {
      plugins: [vuetify],
    },
  });

  const button = wrapper.find('button');
  expect(button.classes()).toContain('v-btn--block'); // Check block-level class
});

test('renders RtButton with rounded corners', async () => {
  const wrapper = mount(RtButton, {
    props: {
      label: 'Rounded Button',
      rounded: true, // Button is rounded
    },
    global: {
      plugins: [vuetify],
    },
  });

  const button = wrapper.find('button');
  expect(button.classes()).toContain('v-btn--rounded'); // Check for rounded corners class
});
