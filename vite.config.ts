import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './build/vite/plugin';
import { createProxy } from './build/vite/proxy';
import { wrapperEnv } from './build/utils';

function pathResolve(srcName = 'src') {
  return `${resolve(process.cwd())}/${srcName}`;
}

export default defineConfig(({ command, mode }: ConfigEnv) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  const viteEnv = wrapperEnv(env);

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv;

  const isBuild = command === 'build';

  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': pathResolve()
      }
    },
    server: {
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY)
    },
    build: {
      target: 'es2015',
      // 分包处理
      rollupOptions: {
        output: {
          manualChunks: {
            'lodash-es': ['lodash-es'],
            'naive-ui': ['naive-ui']
          }
        }
      },
      // 关闭reportCompressedSize显示可以稍微减少包装时间
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1000
    },
    esbuild: {
      drop: ['console', 'debugger']
    },
    plugins: createVitePlugins(viteEnv, isBuild)
  };
});
