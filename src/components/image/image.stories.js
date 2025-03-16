import RtImage from './image.vue';

export default {
  title: 'Components/Image',
  component: RtImage,
  argTypes: {
    src: { control: 'text', description: 'Image source URL' },
    alt: { control: 'text', description: 'Alternate text for the image' },
    lazySrc: { control: 'text', description: 'Low-resolution placeholder image' },
    aspectRatio: { control: 'number', description: 'Aspect ratio for the image' },
    gradient: { control: 'text', description: 'CSS gradient overlay' },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
      description: 'Image loading strategy',
    },
    transition: {
      control: 'text',
      description: 'Transition effect for the image',
    },
    classes: { control: 'object', description: 'CSS classes for the image' },
  },
};

const Template = (args) => ({
  components: { RtImage },
  setup() {
    return { args };
  },
  template: '<RtImage v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/800x400',
  alt: 'Default Image',
  lazySrc: '',
  aspectRatio: 2,
  gradient: '',
  loading: 'lazy',
  transition: 'fade-transition',
  classes: '',
};

export const WithGradient = Template.bind({});
WithGradient.args = {
  ...Default.args,
  gradient: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Default.args,
  lazySrc: 'https://via.placeholder.com/20x10',
};
