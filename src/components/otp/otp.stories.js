import RtOtp from './otp.vue';

export default {
  title: 'Form/Otp Input',
  component: RtOtp,
  argTypes: {
    length: { control: { type: 'number' }, defaultValue: 6 },
    placeholder: { control: { type: 'text' }, defaultValue: '•' },
    otp: { control: { type: 'text' } },
    onUpdateOtp: { action: 'update:otp' },
    onComplete: { action: 'complete' },
  },
};

const Template = (args) => ({
  components: { RtOtp },
  setup() {
    return { args };
  },
  template: `
    <div>
      <RtOtp v-bind="args" @update:otp="args.onUpdateOtp" @complete="args.onComplete" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  length: 6,
  placeholder: '•',
};
