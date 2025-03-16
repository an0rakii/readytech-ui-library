import RtAvatar from './avatar.vue';

export default {
  title: 'Components/Avatar',
  component: RtAvatar,
  argTypes: {
    avatarImage: {
      control: 'text',
      description: 'Image for the avatar',
      defaultValue: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    alt: {
      control: 'text',
      description: 'Alt label for the avatar',
      defaultValue: 'Alt Label',
    },
    ariaLabel: {
      control: 'text',
      description: 'Aria label for the avatar',
      defaultValue: 'Aria Label',
    },
    name: {
      control: 'text',
      description: 'Name for the avatar',
      defaultValue: 'Name',
    },
    rounded: {
      control: 'number',
      description: 'Toggle rounded avatar',
      defaultValue: 1,
    },
    size: {
      control: 'number',
      description: 'Size of the avatar',
      defaultValue: 50,
    },
  },
};

const Template = (args) => ({
  components: { RtAvatar },
  setup() {
    return { args };
  },
  template: `<RtAvatar v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  size: 50,
  image: true,
  ariaLabel: 'Aria Label',
  alt: 'Alt Label',
};

export const SquareAvatar = Template.bind({});
SquareAvatar.args = {
  size: 50,
  image: true,
  rounded: false,
  ariaLabel: 'Aria Label',
  alt: 'Alt Label',
};

export const InitialsOnly = Template.bind({});
InitialsOnly.args = {
  avatarImage: '',
  alt: 'User avatar',
  ariaLabel: 'User avatar',
  name: 'Jane Doe',
  size: 50,
  rounded: true,
};

export const LargeAvatar = Template.bind({});
LargeAvatar.args = {
  size: 60,
  image: true,
  ariaLabel: 'Aria Label',
  alt: 'Alt Label',
};
