import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import unocss from '@unocss/vite';
import DefineOptions from 'unplugin-vue-define-options/vite';
import Components from 'unplugin-vue-components/vite';
import { configSvgIconsPlugin } from './svgSprite';
import { configAutoImport } from './autoImport';
import { configMockPlugin } from './mock';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    unocss(),
    DefineOptions(),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ];

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));

  // unplugin-auto-import
  vitePlugins.push(configAutoImport());

  // mock
  vitePlugins.push(configMockPlugin(isBuild));

  return vitePlugins;
}
