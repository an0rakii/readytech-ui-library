import RtBottomSheet from './bottom-sheet.vue';

export default {
  title: 'Components/Bottom Sheet',
  component: RtBottomSheet,
};

const Template = (args) => ({
  components: { RtBottomSheet },
  setup() {
    return { args };
  },
  template: '<RtBottomSheet v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
