import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import RtAvatar from './avatar.vue';

const vuetify = createVuetify({
  components,
  directives,
});

import ResizeObserver from 'resize-observer-polyfill';
globalThis.ResizeObserver = ResizeObserver;

// Test that the avatar renders an image when avatarImage prop is provided
test('renders an avatar with an image when avatarImage prop is provided', () => {
  const wrapper = mount(RtAvatar, {
    props: {
      avatarImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      alt: 'User Avatar',
      size: 50,
    },
  });

  const img = wrapper.find('img');
  expect(img.exists()).toBe(true);
  expect(img.attributes('src')).toBe('https://randomuser.me/api/portraits/women/44.jpg');
  expect(img.attributes('alt')).toBe('User Avatar');
});

// Test that initials are displayed when avatarImage prop is not provided
test('renders initials when avatarImage prop is not provided', () => {
  const wrapper = mount(RtAvatar, {
    props: {
      avatarImage: '',
      name: 'Jane Doe',
      size: 50,
    },
  });

  const initials = wrapper.find('.initials');
  expect(initials.exists()).toBe(true);
  expect(initials.text()).toBe('JD');
});

// Test that initials are computed correctly from the name prop
test('computes initials correctly from the name prop', () => {
  const wrapper = mount(RtAvatar, {
    props: {
      avatarImage: '',
      name: 'John Smith',
      size: 50,
    },
  });

  const initials = wrapper.find('.initials');
  expect(initials.exists()).toBe(true);
  expect(initials.text()).toBe('JS');
});

// Test that the correct size is applied based on the size prop
test('applies correct size based on the size prop', () => {
  const wrapper = mount(RtAvatar, {
    props: {
      avatarImage: '',
      size: 100,
      name: 'Jane Doe',
    },
  });

  const avatar = wrapper.find('.avatar');
  expect(avatar.exists()).toBe(true);
  expect(avatar.attributes('style')).toContain('width: 100px');
  expect(avatar.attributes('style')).toContain('height: 100px');
});

// Test that the rounded style is applied based on the rounded prop
test('applies rounded style based on the rounded prop', () => {
  const wrapper = mount(RtAvatar, {
    props: {
      avatarImage: '',
      size: 50,
      rounded: true,
      name: 'John Doe',
    },
  });

  const avatar = wrapper.find('.avatar');
  expect(avatar.classes()).toContain('v-avatar--rounded');
});

// Test that the aria-label is correctly applied
test('renders correct aria-label attribute', () => {
  const wrapper = mount(RtAvatar, {
    props: {
      avatarImage: '',
      name: 'John Doe',
      ariaLabel: 'User Avatar',
      size: 50,
    },
  });

  const avatar = wrapper.find('v-avatar');
  expect(avatar.attributes('aria-label')).toBe('User Avatar');
});

// Test that the avatar wrapper is rendered correctly
test('renders the avatar wrapper correctly', () => {
  const wrapper = mount(RtAvatar, {
    props: {
      avatarImage: '',
      name: 'Jane Doe',
      size: 50,
    },
  });

  const avatarWrapper = wrapper.find('.avatar-wrapper');
  expect(avatarWrapper.exists()).toBe(true);
});

// Test that the default props are correctly set
test('has the correct default props', () => {
  const wrapper = mount(RtAvatar);

  expect(wrapper.props().avatarImage).toBe('https://randomuser.me/api/portraits/men/32.jpg');
  expect(wrapper.props().alt).toBe('Alt');
  expect(wrapper.props().ariaLabel).toBe('Aria Label');
  expect(wrapper.props().name).toBe('Name');
  expect(wrapper.props().size).toBe(50);
  expect(wrapper.props().rounded).toBe(1);
});
