import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:3001/',
  
  build: {
    rollupOptions: {
      input: 'src/main.ts',
      output: {
        
        entryFileNames:"main.js",
        format: 'system',
        dir: 'dist',
        strict: true,
        esModule: true,
        exports: 'named',
        preserveModules: false,
        
      },
      preserveEntrySignatures:'strict',
    
      plugins: [commonjs(),html({publicPath:"navbar"})],
    },
    
  },
  plugins: [vue({
    
    template: {
      transformAssetUrls: {
        base: '/src'
        
      }
    }
  })]
})
