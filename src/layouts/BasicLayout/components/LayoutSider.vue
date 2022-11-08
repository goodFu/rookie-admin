<template>
  <aside class="admin-layout-sider" :style="style">
    <slot></slot>
  </aside>
</template>

<script setup lang="ts">
defineOptions({ name: 'LayoutSider' });

interface Props {
  /** fixed布局的层级 */
  zIndex?: number;
  /** 宽度 */
  width?: number;
  /** 顶部内边距 */
  paddingTop?: number;
  /** 动画过渡时间 */
  transitionDuration?: number;
  /** 动画过渡时间 */
  transitionTimingFunction?: string;
}

const props = withDefaults(defineProps<Props>(), {
  zIndex: 1002,
  collapse: false,
  width: 200,
  paddingTop: 0,
  transitionDuration: 300,
  transitionTimingFunction: 'ease-in-out'
});

const style = computed(() => {
  const { zIndex, width, paddingTop, transitionDuration, transitionTimingFunction } = props;
  return `z-index:${zIndex};width:${width}px;padding-top:${paddingTop}px;transition-duration:${transitionDuration}ms;transition-timing-function:${transitionTimingFunction};`;
});
</script>

<style scoped>
.admin-layout-sider {
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transition-property: all;
}
</style>
