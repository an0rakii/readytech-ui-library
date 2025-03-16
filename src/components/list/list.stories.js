import RtList from './list.vue';

export default {
  title: 'Components/List',
  component: RtList,
  argTypes: {
    items: { control: 'array' },
  },
};

const Template = (args) => ({
  components: { RtList },
  setup() {
    return { args };
  },
  template: `
    <RtList v-bind="args" @item-click="onItemClick" />
  `,
  methods: {
    onItemClick(item) {
      console.log('Item clicked:', item);
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Dynamic Item 1', value: 1 },
    { title: 'Dynamic Item 2', value: 2 },
    { title: 'Dynamic Item 3', value: 3 },
  ],
};

export const ListWithSubtitle = Template.bind({});
ListWithSubtitle.args = {
  items: [
    { title: 'Dynamic Item 1', subtitle: 'Subtitle 1', value: 1 },
    { title: 'Dynamic Item 2', subtitle: 'Subtitle 2', value: 2 },
  ],
};

export const ListWithIcon = Template.bind({});
ListWithIcon.args = {
  items: [
    { title: 'Dynamic Item 1', subtitle: 'Subtitle 1', icon: 'mdi-home', value: 1 },
    { title: 'Dynamic Item 2', subtitle: 'Subtitle 2', icon: 'mdi-account', value: 2 },
  ],
};