import RtSelectAutocomplete from './select-autocomplete.vue';

export default {
  title: 'Form/Select Autocomplete',
  component: RtSelectAutocomplete,
  argTypes: {
    label: { control: 'text' },
    items: { control: 'array' },
    clearable: { control: 'boolean' },
    multiple: { control: 'boolean' },
    loading: { control: 'boolean' },
    appendButton: { control: 'text' },
    onSearch: { action: 'search' },
    onChange: { action: 'change' },
    onAppendClick: { action: 'append-click' },
  },
};

const Template = (args) => ({
  components: { RtSelectAutocomplete },
  setup() {
    return { args };
  },
  template: '<RtSelectAutocomplete v-bind="args" @search="args.onSearch" @change="args.onChange" @append-click="args.onAppendClick" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  items: [
    {text: 'awaiting Listing', value: 'awaiting Listing'}, 
    {text: 'Hearing Schedule', value: 'Hearing Schedule'}, 
    {text: 'JOH Day View', value: 'JOH Day View'},
    {text: 'Bulk Session Updates', value: 'Bulk Session Updates'},
    {text: 'Room Day View', value: 'Room Day View'},
    {text: 'Decline Session Booking', value: 'Decline Session Booking'},
    {text: 'Video Hearing Listings Bulk Update', value: 'Video Hearing Listings Bulk Update'},
    {text: 'Linked Hearing Groups', value: 'Linked Hearding Groups'},
    {text: 'Multi Day Session Cart', value: 'Multi Day Session Cart'},
  ],
  clearable: true,
  multiple: false,
  loading: false,
  appendButton: 'Add Item',
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading...',
  items: [],
  clearable: false,
  multiple: false,
  loading: true,
  appendButton: null,
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  label: 'Select multiple options',
  items: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  clearable: true,
  multiple: true,
  loading: false,
  appendButton: null,
};