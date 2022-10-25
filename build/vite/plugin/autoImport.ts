/**
 *  Auto import APIs on-demand for Vite, Webpack, Rollup and esbuild. With TypeScript support.
 *  https://www.npmjs.com/package/unplugin-auto-import
 */
import AutoImport from 'unplugin-auto-import/vite';

export function configAutoImport() {
  const autoImportPlugins = AutoImport({
    imports: ['vue']
  });
  return autoImportPlugins;
}
