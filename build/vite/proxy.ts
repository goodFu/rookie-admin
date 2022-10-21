/**
 * 用于解析.env.development代理配置
 */
import type { ProxyOptions } from 'vite';

type ProxyItem = [string, string];

type ProxyList = ProxyItem[];

type ProxyTargetList = Record<string, ProxyOptions>;

const httpsRE = /^https:\/\//;

/**
 * Generate proxy
 * @param list
 */
export function createProxy(list: ProxyList = []) {
  const ret: ProxyTargetList = {};
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target);
    ret[prefix] = {
      target: target,
      changeOrigin: true,
      ws: false,
      rewrite: path => path.replace(new RegExp(`^${prefix}`), ''),
      // 使用https 需要设置 secure=false
      ...(isHttps ? { secure: false } : {})
    };
  }
  return ret;
}
