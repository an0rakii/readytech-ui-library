import RtButton from "./button.vue";

export default {
  title: "Form/Button",
  component: RtButton,
  tags: ["docsPage"],
  args: {
    label: "Click me",
  },
  argTypes: {
    color: { control: 'text' },
    icon: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    outlined: { control: 'boolean' },
    text: { control: 'boolean' },
    tile: { control: 'boolean' },
    depressed: { control: 'boolean' },
    rounded: { control: 'boolean' },
    block: { control: 'boolean' },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
    },
    href: { control: 'text' },
    target: {
      control: {
        type: 'select',
        options: ['_self', '_blank', '_parent', '_top'],
      },
    },
    elevation: { control: 'number' },
    to: { control: 'text' },
    replace: { control: 'boolean' },
    exact: { control: 'boolean' },
    append: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/vue/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const extraSmall = {
  args: {
    size: "x-small",
    label: "Button",
  },
};

export const small = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const defaultSize = {
  args: {
    size: "default",
    label: "Button",
  },
};


export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const extraLarge = {
  args: {
    size: "x-large",
    label: "Button",
  },
};

export const block = {
  args: {
    size: "default",
    label: "Button",
    block: true,
    primary: true,
  },
};

export const disabled = {
  args: {
    size: "default",
    label: "Button",
    block: true,
    primary: true,
    disabled: true,
  },
};

export const withLoading = {
  args: {
    size: "default",
    label: "Button",
    block: true,
    primary: true,
    loading: true,
  },
};

export const rounded = {
  args: {
    size: "default",
    label: "Button",
    block: true,
    primary: true,
    rounded: true,
  },
};


export const withElevation = {
  args: {
    size: "default",
    label: "Button",
    block: true,
    primary: true,
    elevation: 5,
  },
};
