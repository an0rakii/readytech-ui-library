import RtTreeView from "./treeview.vue";

export default {
  title: "Components/Treeview",
  component: RtTreeView,
  argTypes: {
    items: { control: "object" },
    open: { control: "array" },
    active: { control: "array" },
  },
};

const Template = (args) => ({
  components: { RtTreeView },
  setup() {
    return { args };
  },
  template: '<RtTreeView v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: 1,
      title: 'Applications :',
      children: [
        { id: 2, title: 'Calendar : app' },
        { id: 3, title: 'Chrome : app' },
        { id: 4, title: 'Webstorm : app' },
      ],
    },
    {
      id: 5,
      title: 'Documents :',
      children: [
        {
          id: 6,
          title: 'vuetify :',
          children: [
            {
              id: 7,
              title: 'src :',
              children: [
                { id: 8, title: 'index : ts' },
                { id: 9, title: 'bootstrap : ts' },
              ],
            },
          ],
        },
        {
          id: 10,
          title: 'material2 :',
          children: [
            {
              id: 11,
              title: 'src :',
              children: [
                { id: 12, title: 'v-btn : ts' },
                { id: 13, title: 'v-card : ts' },
                { id: 14, title: 'v-window : ts' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 15,
      title: 'Downloads :',
      children: [
        { id: 16, title: 'October : pdf' },
        { id: 17, title: 'November : pdf' },
        { id: 18, title: 'Tutorial : html' },
      ],
    },
    {
      id: 19,
      title: 'Videos :',
      children: [
        {
          id: 20,
          title: 'Tutorials :',
          children: [
            { id: 21, title: 'Basic layouts : mp4' },
            { id: 22, title: 'Advanced techniques : mp4' },
            { id: 23, title: 'All about app : dir' },
          ],
        },
        { id: 24, title: 'Intro : mov' },
        { id: 25, title: 'Conference introduction : avi' },
      ],
    },
  ],
  open: [1],
  active: [],
};

export const Preopened = Template.bind({});
Preopened.args = {
  items: [
    {
      id: 1,
      title: 'Applications :',
      children: [
        { id: 2, title: 'Calendar : app' },
        { id: 3, title: 'Chrome : app' },
        { id: 4, title: 'Webstorm : app' },
      ],
    },
    {
      id: 5,
      title: 'Documents :',
      children: [
        {
          id: 6,
          title: 'vuetify :',
          children: [
            {
              id: 7,
              title: 'src :',
              children: [
                { id: 8, title: 'index : ts' },
                { id: 9, title: 'bootstrap : ts' },
              ],
            },
          ],
        },
        {
          id: 10,
          title: 'material2 :',
          children: [
            {
              id: 11,
              title: 'src :',
              children: [
                { id: 12, title: 'v-btn : ts' },
                { id: 13, title: 'v-card : ts' },
                { id: 14, title: 'v-window : ts' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 15,
      title: 'Downloads :',
      children: [
        { id: 16, title: 'October : pdf' },
        { id: 17, title: 'November : pdf' },
        { id: 18, title: 'Tutorial : html' },
      ],
    },
    {
      id: 19,
      title: 'Videos :',
      children: [
        {
          id: 20,
          title: 'Tutorials :',
          children: [
            { id: 21, title: 'Basic layouts : mp4' },
            { id: 22, title: 'Advanced techniques : mp4' },
            { id: 23, title: 'All about app : dir' },
          ],
        },
        { id: 24, title: 'Intro : mov' },
        { id: 25, title: 'Conference introduction : avi' },
      ],
    },
  ],
  open: [1, 5],
  active: [2],
};

export const NoData = Template.bind({});
NoData.args = {
  items: [],
  open: [],
  active: [],
};