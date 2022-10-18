import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './build/vite/plugin';
import { wrapperEnv } from './build/utils';

function pathResolve(srcName = 'src') {
  return `${resolve(process.cwd())}/${srcName}`;
}

export default defineConfig(({ command, mode }: ConfigEnv) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  const viteEnv = wrapperEnv(env);
  const isBuild = command === 'build';
  return {
    resolve: {
      alias: {
        '@': pathResolve()
      }
    },
    plugins: createVitePlugins(viteEnv, isBuild)
  };
});
