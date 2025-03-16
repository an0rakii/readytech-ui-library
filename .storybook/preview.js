import { setup } from '@storybook/vue3';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Ensure you import Vuetify styles
// import '@mdi/font/css/materialdesignicons.css'; // Import icons if needed
import "@mdi/font/css/materialdesignicons.min.css";

// Import Vuetify components and directives
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});

// Setup Storybook Vue App with Vuetify
setup((app) => {
  app.use(vuetify);
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
