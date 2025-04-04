import RtAlert from './alert.vue';

export default {
  title: 'Components/Alert',
  component: RtAlert,
  argTypes: {
    density: { control: 'select', options: ['default', 'comfortable', 'compact'] },
    closable: { control: 'boolean' },
    variant: { control: 'select', options: ['plain', 'outlined', 'tonal', 'flat', 'elevated', 'text'] },
    text: { control: 'text' },
    border: { control: 'select', options: ['start', 'top', 'bottom', 'end'] },
    icon: { control: 'select', options: ['info', 'success', 'warning', 'error', 'hidden'] },
    borderColor: { control: 'select', options: ['info', 'success', 'warning', 'error', 'deep-purple accent-4'] },
    color: { control: 'select', options: ['info', 'success', 'warning', 'error', 'hidden'] },
  },
};

const Template = (args) => ({
  components: { RtAlert },
  setup() {
    return { args };
  },
  template: '<RtAlert v-bind="args"><slot></slot></RtAlert>',
});

export const Info = Template.bind({});
Info.args = {
  text: 'This is an info alert',
  icon: 'info',
  color: 'info',
  closable: false,
};

export const Success = Template.bind({});
Success.args = {
  text: 'This is a success alert',
  icon: 'success',
  color: 'success',
  closable: false,
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'This is a warning alert',
  icon: 'warning',
  color: 'warning',
  closable: false,
};

export const Error = Template.bind({});
Error.args = {
  text: 'This is an error alert',
  icon: 'error',
  color: 'error',
  closable: false,
};

export const Hidden = Template.bind({});
Hidden.args = {
  text: 'This is a hidden alert',
  icon: 'hidden',
  color: 'hidden',
  closable: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  text: 'This is an outlined alert',
  icon: 'info',
  color: 'info',
  variant: 'outlined',
  closable: false,
};

export const Tonal = Template.bind({});
Tonal.args = {
  text: 'This is a tonal alert',
  icon: 'info',
  color: 'info',
  variant: 'tonal',
  closable: false,
};

export const Flat = Template.bind({});
Flat.args = {
  text: 'This is a filled alert',
  icon: 'info',
  color: 'info',
  variant: 'flat',
  closable: false,
};

export const Elevated = Template.bind({});
Elevated.args = {
  text: 'This is an elevated alert',
  icon: 'info',
  color: 'info',
  variant: 'elevated',
  closable: false,
};

export const Text = Template.bind({});
Text.args = {
  text: 'This is a text alert',
  icon: 'info',
  color: 'info',
  variant: 'text',
  closable: false,
};

export const Plain = Template.bind({});
Plain.args = {
  text: 'This is a plain alert',
  icon: 'info',
  color: 'info',
  variant: 'plain',
  closable: false,
};

export const Closable = Template.bind({});
Closable.args = {
  text: 'This is a closable alert',
  icon: 'info',
  color: 'info',
  variant: 'elevated',
  closable: true,
};

export const Comfortable = Template.bind({});
Comfortable.args = {
  text: 'This is a comfortable alert',
  icon: 'info',
  color: 'info',
  variant: 'elevated',
  density: 'comfortable',
};

export const Compact = Template.bind({});
Compact.args = {
  text: 'This is a compact alert',
  icon: 'info',
  color: 'info',
  variant: 'elevated',
  density: 'compact',
};

export const DefaultDensity = Template.bind({});
DefaultDensity.args = {
  text: 'This is a compact alert',
  icon: 'info',
  color: 'info',
  variant: 'elevated',
  density: 'default',
};

export const BorderStart = Template.bind({});
BorderStart.args = {
  text: 'This is a border start alert',
  icon: 'info',
  color: 'info',
  variant: 'elevated',
  border: 'start',
};

export const BorderTop = Template.bind({});
BorderTop.args = {
  text: 'This is a border top alert',
  icon: 'info',
  color: 'info',
  variant: 'elevated',
  border: 'top',
};

export const BorderEnd = Template.bind({});
BorderEnd.args = {
  text: 'This is a border end alert',
  icon: 'info',
  color: 'info',
  variant: 'elevated',
  border: 'end',
};

export const BorderBottom = Template.bind({});
BorderBottom.args = {
  text: 'This is a border bottom alert',
  icon: 'info',
  color: 'info',
  variant: 'elevated',
  border: 'bottom',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  text: 'This is an alert with a custom icon',
  icon: 'vuetify',
  color: 'info',
  variant: 'elevated',
  border: 'none',
};

export const CustomBorderColor = Template.bind({});
CustomBorderColor.args = {
  text: 'This is an alert with a custom border color',
  icon: 'info',
  color: 'info',
  variant: 'elevated',
  border: 'start',
  borderColor: 'deep-purple accent-4',
};
