import RtConfirmEdit from './confirm-edit.vue';

export default {
  title: 'Form/Confirm Edit',
  component: RtConfirmEdit,
  argTypes: {
    value: { control: 'text', defaultValue: 'Sample Text' },
    label: { control: 'text', defaultValue: 'Edit Value' },
    icon: { control: 'text', defaultValue: 'mdi-pencil' },
    onUpdateValue: { action: 'update:value' },
  },
};

const Template = (args) => ({
  components: { RtConfirmEdit },
  setup() {
    return { args };
  },
  template: `
    <div>
      <RtConfirmEdit v-bind="args" @update:value="args.onUpdateValue" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  value: 'Sample Text',
  label: 'Edit Value',
  icon: 'mdi-pencil',
};
