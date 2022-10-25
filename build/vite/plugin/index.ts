import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import unocss from '@unocss/vite';
import { configSvgIconsPlugin } from './svgSprite';
import { configAutoImport } from './autoImport';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    unocss()
  ];

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));

  // unplugin-auto-import
  vitePlugins.push(configAutoImport());

  return vitePlugins;
}
