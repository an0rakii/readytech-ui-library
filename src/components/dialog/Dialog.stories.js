// DialogComponent.stories.js
import RtDialog from './Dialog.vue';

export default {
  title: 'Components/Dialog',
  component: RtDialog,
  argTypes: {
    fullscreen: { control: 'boolean' },
    hideOverlay: { control: 'boolean' },
    maxWidth: { control: 'text' },
    persistent: { control: 'boolean' },
    retainFocus: { control: 'boolean' },
    scrollable: { control: 'boolean' },
    transition: { control: 'text' },
    value: { control: 'boolean' },
    onActivatorClick: { action: 'activator clicked' },
    onClose: { action: 'dialog closed' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RtDialog },
  template: `
    <rtDialog
      v-bind="$props"
      @update:value="value => $props.value = value"
      @activator-click="onActivatorClick"
      @close="onClose"
    >
      Dialog Content
    </rtDialog>
  `,
});

export const Default = Template.bind({});
Default.args = {
  fullscreen: false,
  hideOverlay: false,
  maxWidth: '500',
  persistent: false,
  retainFocus: true,
  scrollable: false,
  transition: 'dialog-transition',
  value: false,
};
