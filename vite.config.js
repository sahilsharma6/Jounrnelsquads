import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   outDir: 'dist', // Specify the publish directory here
  //   assetsDir: '', // Optional: Directory for assets within outDir
  //   // Other build options
  // },
})
