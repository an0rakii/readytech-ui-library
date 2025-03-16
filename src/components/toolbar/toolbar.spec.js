import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import RtToolbar from './toolbar.vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

test('renders RtToolbar with title', async () => {
  const wrapper = mount(RtToolbar, {
    props: {
      title: 'Toolbar Title', // Provide a title
    },
    global: {
      plugins: [vuetify],
    },
  });

  const toolbarTitle = wrapper.find('.v-toolbar-title');
  expect(toolbarTitle.exists()).toBe(true);
  expect(toolbarTitle.text()).toBe('Toolbar Title');
});

test('renders RtToolbar with vertical dots icon inside button', async () => {
    const wrapper = mount(RtToolbar, {
      props: {
        title: 'Toolbar with Vertical Dots Icon',
      },
      global: {
        plugins: [vuetify],
      },
    });
  
    // Find all button elements within the toolbar
    const buttons = wrapper.findAll('button');
  
    // Check if any button contains an <i> element with the class 'mdi-dots-vertical'
    let dotsIconFound = false;
  
    buttons.forEach(button => {
      const dotsIcon = button.find('i.mdi-dots-vertical');
      if (dotsIcon.exists()) {
        dotsIconFound = true;
      }
    });
  
    expect(dotsIconFound).toBe(true); // Assert that at least one button contains the mdi-dots-vertical icon
  });

test('does not render icon if icon prop is false', async () => {
  const wrapper = mount(RtToolbar, {
    props: {
      title: 'Toolbar without Icon',
      icon: false, // Do not display the icon
    },
    global: {
      plugins: [vuetify],
    },
  });

  const icon = wrapper.find('v-icon');
  expect(icon.exists()).toBe(false); // Icon should not be rendered
});

test('renders RtToolbar with collapse prop set to false', async () => {
  const wrapper = mount(RtToolbar, {
    props: {
      title: 'Expanded Toolbar',
      collapse: false, // Set collapse prop to false
    },
    global: {
      plugins: [vuetify],
    },
  });

  const toolbar = wrapper.find('.rt-toolbar');
  expect(toolbar.classes()).not.toContain('v-toolbar--dense'); // Check that dense class is not applied
});





