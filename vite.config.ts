import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

// Custom plugin to format HTML in development mode
const formatHtml = () => {
  return {
    name: 'format-html',
    transformIndexHtml(html) {
      // Only run in development mode
      if (process.env.NODE_ENV !== 'production') {
        // Basic formatting: add newlines after closing tags
        return html.replace(/<\/([^>]+)>/g, '</$1>\n');
      }
      return html;
    }
  };
};

export default defineConfig({
  plugins: [
    sveltekit(),
    formatHtml()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',
        includePaths: [path.resolve('./src/styles')]
      }
    }
  },
  // Extract CSS to external files
  build: {
    cssCodeSplit: true,
    minify: process.env.NODE_ENV === 'production', // Only minify in production
    rollupOptions: {
      output: {
        // Configure manual chunks for better bundling
        manualChunks: (id) => {
          // Group all Svelte framework code
          if (id.includes('node_modules/svelte')) {
            return 'vendor-svelte';
          }
          
          // Group shared utilities and libraries
          if (
            id.includes('node_modules') && (
              id.includes('lodash') || 
              id.includes('date-fns') || 
              id.includes('utility-library')
            )
          ) {
            return 'vendor-utils';
          }
          
          // Group other third-party libraries but keep them separate
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          
          // Group app components by feature area
          if (id.includes('/lib/components/base/')) {
            return 'components-base';
          }
          
          if (id.includes('/lib/components/layout/')) {
            return 'components-layout';
          }
          
          // Keep route-specific code separate for better code-splitting
          if (id.includes('/routes/')) {
            return;
          }
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (extType === 'css') {
            return `css/[name].[hash][extname]`;
          }
          return `assets/[name].[hash][extname]`;
        },
        // Configure JS output format
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    port: 4173
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});