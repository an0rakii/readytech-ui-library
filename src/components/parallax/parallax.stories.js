import RtParallax from './parallax.vue';

export default {
  title: 'Components/Parallax',
  component: RtParallax,
  argTypes: {
    height: {
      control: 'number',
      description: 'Height of the parallax component',
      defaultValue: 600,
    },
    src: {
      control: 'text',
      description: 'URL for the parallax image',
      defaultValue:
        'https://images.unsplash.com/photo-1607631501395-b3028b9c85c2?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OHwwfDF8c2VhcmNofDI2fHxyZWFjdGlvbnxlbnwwfHx8fDE2ODc1NDY1NzM&ixlib=rb-1.2.1&q=80&w=1080',
    },
  },
};

const Template = (args) => ({
  components: { RtParallax },
  setup() {
    return { args };
  },
  template: `<RtParallax v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  height: 600,
  src:
    'https://images.unsplash.com/photo-1607631501395-b3028b9c85c2?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OHwwfDF8c2VhcmNofDI2fHxyZWFjdGlvbnxlbnwwfHx8fDE2ODc1NDY1NzM&ixlib=rb-1.2.1&q=80&w=1080',
};

export const LargeParallax = Template.bind({});
LargeParallax.args = {
  height: 800,
  src:
    'https://images.unsplash.com/photo-1511752489112-f28e4d72cc7e?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OHwwfDF8c2VhcmNofDI2fHxyZWFjdGlvbnxlbnwwfHx8fDE2ODc1NDY1NzM&ixlib=rb-1.2.1&q=80&w=1080',
};

export const SmallParallax = Template.bind({});
SmallParallax.args = {
  height: 400,
  src:
    'https://images.unsplash.com/photo-1526518982963-61d1b1985928?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OHwwfDF8c2VhcmNofDI2fHxyZWFjdGlvbnxlbnwwfHx8fDE2ODc1NDY1NzM&ixlib=rb-1.2.1&q=80&w=1080',
};
