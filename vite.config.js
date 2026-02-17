import { defineConfig } from 'vite';
import injectDiff from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [
    injectDiff(),
  ],
});