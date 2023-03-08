import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import AutoImport from 'unplugin-auto-import/rollup';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/230308-CMS-layout-prac/',
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: './auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ['src/components', 'src/views'],
      deep: true,
      dts: './components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
