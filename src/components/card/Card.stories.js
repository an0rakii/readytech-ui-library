// CardComponent.stories.js
import RtCard from './Card.vue';

export default {
  title: 'Components/Card',
  component: RtCard,
  tags: ['docsPage'],
  args: {
    color: 'white',
    elevation: 2,
    outlined: false,
    hasHeader: false,
    hasFooter: false,
    header: 'Card Title',
    subtitle: 'Card Subtitle',
  },
  argTypes: {
    color: { control: 'text' },
    elevation: { control: 'number' },
    outlined: { control: 'boolean' },
    hasHeader: { control: 'boolean' },
    hasFooter: { control: 'boolean' },
    header: { control: 'text' },
    subtitle: { control: 'text' },
    maxHeight: { control: 'text' },
    maxWidth: { control: 'text' },
    minHeight: { control: 'text' },
    minWidth: { control: 'text' },
    loading: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

// Basic Card (Default)
export const Default = {
  args: {
    color: 'light-blue',
    elevation: 2,
    outlined: false,
    hasHeader: true,
    hasFooter: true,
    header: 'Header',
    subtitle: 'Card Subtitle',
  },
};

// Card with Header
export const WithHeader = {
  args: {
    color: 'light-blue',
    elevation: 2,
    outlined: false,
    hasHeader: true,
    hasFooter: false,
    header: 'Header Only',
    subtitle: 'Card Subtitle with Header Only',
  },
};

// Card with Footer
export const WithFooter = {
  args: {
    color: 'teal',
    elevation: 2,
    outlined: false,
    hasHeader: false,
    hasFooter: true,
    subtitle: 'Subtitle for Footer card',
  },
};

// Outlined Card
export const Outlined = {
  args: {
    color: 'green',
    elevation: 0,
    outlined: true,
    hasHeader: true,
    hasFooter: true,
    header: 'Outlined Card Header',
    subtitle: 'Subtitle for the Outlined Card',
  },
};

// Card with Loading State
export const Loading = {
  args: {
    color: 'purple',
    elevation: 2,
    outlined: false,
    hasHeader: true,
    hasFooter: true,
    header: 'Loading Card',
    subtitle: 'This card is loading...',
    loading: true,
  },
};

// Card with Loading State
export const CardWithElevation = {
  args: {
    color: 'purple',
    elevation: 10,
    outlined: false,
    hasHeader: true,
    hasFooter: true,
    header: 'Loading Card',
    subtitle: 'This card is loading...',
    loading: true,
  },
};
