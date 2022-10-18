import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import unocss from '@unocss/vite';
import { configSvgIconsPlugin } from './svgSprite';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    unocss()
  ];

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));

  return vitePlugins;
}
