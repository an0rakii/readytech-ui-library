//// .storybook/manager.js

import { addons } from "@storybook/addons";
import { create, themes } from "@storybook/theming";
// import myTheme from "./theme.js";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "ReadyTech",
    brandUrl: "https://readytech.io",
    brandImage: "https://pemba.com.au/wp-content/uploads/2018/06/ReadyTech-1.png"
  })
});

// import { addons } from '@storybook/manager-api';
// import { create, themes } from '@storybook/theming';

// addons.setConfig({
//   theme: create({
//     base: 'dark',
//     brandTitle: 'ReadyTech',
//     brandUrl: 'https://readytech.io',
//     brandImage: '../public/ReadyTech.png',
//   }),
// });
