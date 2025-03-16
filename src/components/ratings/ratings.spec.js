import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import RtRatings from './ratings.vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

describe('RtRatings.vue', () => {
//   it('renders the component with default props', () => {
//     const wrapper = mount(RtRatings, {
//       global: {
//         plugins: [vuetify],
//       },
//     });

//     const rating = wrapper.findComponent({ name: 'v-rating' });
//     expect(rating.exists()).toBe(true);

//     // Verify default props
//     expect(rating.props('modelValue')).toBe(0);
//     expect(rating.props('max')).toBe(5);
//     expect(rating.props('color')).toBe('primary');
//     expect(rating.props('backgroundColor')).toBe('grey lighten-2');
//     expect(rating.props('size')).toBe('24px');
//     expect(rating.props('readonly')).toBe(false);
//     expect(rating.props('halfIncrements')).toBe(false);
//   });

//   it('renders the component with custom props', () => {
//     const wrapper = mount(RtRatings, {
//       props: {
//         modelValue: 3,
//         max: 10,
//         color: 'red',
//         backgroundColor: 'blue lighten-3',
//         size: '32px',
//         readonly: true,
//         halfIncrements: true,
//       },
//       global: {
//         plugins: [vuetify],
//       },
//     });

//     const rating = wrapper.findComponent({ name: 'v-rating' });

//     // Verify custom props
//     expect(rating.props('modelValue')).toBe(3);
//     expect(rating.props('max')).toBe(10);
//     expect(rating.props('color')).toBe('red');
//     expect(rating.props('backgroundColor')).toBe('blue lighten-3');
//     expect(rating.props('size')).toBe('32px');
//     expect(rating.props('readonly')).toBe(true);
//     expect(rating.props('halfIncrements')).toBe(true);
//   });

  it('emits update:modelValue event on value change', async () => {
    const wrapper = mount(RtRatings, {
      global: {
        plugins: [vuetify],
      },
    });

    const rating = wrapper.findComponent({ name: 'v-rating' });

    // Trigger a value update
    await rating.vm.$emit('update:modelValue', 4);

    // Assert the event has been emitted
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([4]);
  });

  it('renders with readonly prop set to true', () => {
    const wrapper = mount(RtRatings, {
      props: {
        readonly: true,
      },
      global: {
        plugins: [vuetify],
      },
    });

    const rating = wrapper.findComponent({ name: 'v-rating' });
    expect(rating.props('readonly')).toBe(true);
  });

  it('handles half increments correctly', () => {
    const wrapper = mount(RtRatings, {
      props: {
        halfIncrements: true,
      },
      global: {
        plugins: [vuetify],
      },
    });

    const rating = wrapper.findComponent({ name: 'v-rating' });
    expect(rating.props('halfIncrements')).toBe(true);
  });
});
