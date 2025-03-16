/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import '../styles/main.scss';
import { createVuetify } from "vuetify";



export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          primary: "#25d07b",
          secondary: "#FBC27C",
          onPrimary: '#ffffff',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#2B2C28",
          surface: "#2B2C28",
          primary: "#CC3363",
          secondary: "#F7B05B",
        },
      },
      readytech: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          primary: "#000000",
          secondary: "#FBC27C",
        },
      },
    },
  },
});
