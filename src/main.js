import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import vuetify from './plugins/vuetify'; // Ensure you have Vuetify configured

 // Import Vuetify and its styles
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

// // Optionally, import icon fonts if you want to use them
// import '@mdi/font/css/materialdesignicons.css'

// Optionally, import Vuetify components and directives
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Create the Vuetify instance
const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
// createApp(App).mount('#app')
