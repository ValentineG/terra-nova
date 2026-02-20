import { defineConfig } from 'vite';
import injectDiff from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [
    injectDiff(),
  ],
  build: {
    cssCodeSplit: true, // Дозволяє розділяти CSS
    rollupOptions: {
      output: {
        // Це змусить зберігати назви, але додавати хеш
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            // Зберігаємо структуру: css/назва.хеш.css
            return 'css/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        },
      },
    },
  },
});