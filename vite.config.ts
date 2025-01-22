import {defineConfig, normalizePath} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import copy from "rollup-plugin-copy";

// Get `outDir` from command line or use a default value
// Example: `npm run build -- --outDir=dist/custom-dir` || `vite build --outDir=chrome`
// const args = process.argv.slice(2);
// const outDirArg = args.find(arg => arg.startsWith('--outDir='));
// const outDir = outDirArg ? outDirArg.split('=')[1] : 'chrome'; // Default is 'chrome'
const outDir = 'chrome';

export default defineConfig({
  base: './',
  build: {
    outDir: outDir,
    rollupOptions: {
      input: {
        app: 'src/app/css-outliner.ts',
      },
      output: {
        entryFileNames: 'js/css-outliner.js',
      },
    },
  },
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    copy({
      targets: [
        {src: 'src/app/assets/logo/*', dest: `chrome/assets/logo`},
        {src: 'src/app/assets/images/*', dest: `chrome/assets/images`},
        {src: 'src/manifest.json', dest: `chrome/`},
        {src: 'src/background.js', dest: `chrome/js`},
      ],
      hook: 'writeBundle'
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@api': path.resolve(__dirname, 'src/app/api'),
      '@components': path.resolve(__dirname, 'src/app/components'),
      '@pages': path.resolve(__dirname, 'src/app/components/pages'),
      '@vui': path.resolve(__dirname, 'src/app/components/vui'),
      '@assets': path.resolve(__dirname, 'src/app/assets'),
      '@views': path.resolve(__dirname, 'src/app/views'),
      '@utils': path.resolve(__dirname, 'src/app/utils'),
    },
  },
});
