import { mount } from '@vue/test-utils';
import { expect, vi, test } from 'vitest';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import RtCheckbox from './checkbox.vue'; // Ensure the path is correct

const vuetify = createVuetify({
    components,
    directives,
});

// Test suite for RtCheckbox component


  // Test default state (unchecked)
  test('renders with the correct initial state (unchecked)', () => {
    const wrapper = mount(RtCheckbox, {
      props: {
        modelValue: false,
        label: 'Test Checkbox',
        disabled: false,
        error: false,
        errorMessages: [],
        indeterminate: false,
      },
      global: {
        plugins: [vuetify],
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.exists()).toBe(true);
    expect(checkbox.element.checked).toBe(false);
    expect(wrapper.text()).toContain('Test Checkbox');
  });

  // Test when checkbox is checked
  test('renders as checked when modelValue is true', () => {
    const wrapper = mount(RtCheckbox, {
      props: {
        modelValue: true,
        label: 'Test Checkbox',
        disabled: false,
        error: false,
        errorMessages: [],
        indeterminate: false,
      },
      global: {
        plugins: [vuetify],
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.element.checked).toBe(true);
  });

  // Test when checkbox is disabled
  test('renders as disabled when the disabled prop is true', () => {
    const wrapper = mount(RtCheckbox, {
      props: {
        modelValue: false,
        label: 'Test Checkbox',
        disabled: true,
        error: false,
        errorMessages: [],
        indeterminate: false,
      },
      global: {
        plugins: [vuetify],
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.element.disabled).toBe(true);
  });

  // Test when checkbox has error messages
  test('displays error messages when error prop is true', () => {
    const wrapper = mount(RtCheckbox, {
      props: {
        modelValue: false,
        label: 'Test Checkbox',
        disabled: false,
        error: true,
        errorMessages: ['This checkbox is required.'],
        indeterminate: false,
      },
      global: {
        plugins: [vuetify],
      },
    });

    const errorMessages = wrapper.findAll('.v-messages__message');
    expect(errorMessages.length).toBe(1);
    expect(errorMessages[0].text()).toBe('This checkbox is required.');
  });

  // Test the indeterminate state
  test('renders as indeterminate when indeterminate prop is true', () => {
    const wrapper = mount(RtCheckbox, {
      props: {
        modelValue: false,
        label: 'Test Checkbox',
        disabled: false,
        error: false,
        errorMessages: [],
        indeterminate: true,
      },
      global: {
        plugins: [vuetify],
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.attributes('aria-checked')).toBe('mixed');
    expect(checkbox.element.indeterminate).toBe(true);
  });

  // Test modelValue prop binding (two-way binding)
  test('updates modelValue when checkbox is clicked', async () => {
    const wrapper = mount(RtCheckbox, {
      props: {
        modelValue: false,
        label: 'Test Checkbox',
        disabled: false,
        error: false,
        errorMessages: [],
        indeterminate: false,
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.setChecked();  // Simulate a click to check the checkbox
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true]);  // Expect 'true' after check

    await checkbox.setChecked(false);  // Simulate a click to uncheck the checkbox
    expect(wrapper.emitted()['update:modelValue'][1]).toEqual([false]);  // Expect 'false' after uncheck
  });

  // Test the disabled state doesn't trigger click event
  test('does not trigger modelValue update when disabled', async () => {
    const wrapper = mount(RtCheckbox, {
      props: {
        modelValue: false,
        label: 'Test Checkbox',
        disabled: true,
        error: false,
        errorMessages: [],
        indeterminate: false,
      },
      global: {
        plugins: [vuetify],
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.setChecked();
    // Ensure the checkbox doesn't change because it's disabled
    expect(wrapper.emitted()['update:modelValue']).toBeUndefined();
  });

  // Test the checkbox is correctly toggled using the modelValue prop
  test('correctly toggles between checked and unchecked', async () => {
    const wrapper = mount(RtCheckbox, {
      props: {
        modelValue: false,
        label: 'Test Checkbox',
        disabled: false,
        error: false,
        errorMessages: [],
        indeterminate: false,
      },
      global: {
        plugins: [vuetify],
      },
    });

    // Check if checkbox is initially unchecked
    expect(wrapper.vm.checkedValue).toBe(false);
    const checkbox = wrapper.find('input[type="checkbox"]');
    
    // Simulate a click and check if value updates
    await checkbox.setChecked();
    expect(wrapper.vm.checkedValue).toBe(true);
    
    // Simulate another click and check if value updates
    await checkbox.setChecked(false);
    expect(wrapper.vm.checkedValue).toBe(false);
  });

