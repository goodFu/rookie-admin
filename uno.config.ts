import { defineConfig } from '@unocss/vite';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  rules: [
    ['border', { border: '1px solid red' }],
    ['pink', { color: 'pink' }]
  ]
});
