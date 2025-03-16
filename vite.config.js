import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: resolve(__dirname, "src/index.js"),
      name:"readytech-ui-library-v2",
      fileName: (format)=> `readytech-ui-library-v2.${format}.js` 
    },
    rollupOptions:{
      external:["vue"],
      output:{
        globals:{
          vue:"Vue"
        }
      }
    }

  },
  plugins: [vue()],
})
