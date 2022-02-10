import { defineConfig } from 'vite';
import { name, version } from './package.json';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'umd'],
      name: 'services',
    },
    outDir: './lib',
  },
  define: {
    pkgJson: { name, version },
  },
});
