/**
 * On-demand components auto importing for Vue.
 * https://github.com/antfu/unplugin-vue-components
 */
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';

export function configComponentsPlugins() {
  const componentsPlugins = Components({
    dts: './types/components.d.ts',
    resolvers: [NaiveUiResolver(), IconsResolver({ prefix: 'icon' })]
  });
  return componentsPlugins;
}
