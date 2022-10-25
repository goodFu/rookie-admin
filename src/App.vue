<template>
  <div class="aaa">111</div>
  <SvgIcon name="sun" color="#ff0000" :size="40" />
  <div class="w-100px h-100px border pink">恭喜你中了100万</div>
  <div class="i-ri-bug-line text-3xl bg-green-500"></div>
</template>

<script setup lang="ts">
import SvgIcon from './components/Icon';
let num = ref(0);
let num2 = reactive({ a: 2 });
console.log('num => ', num, num2);
</script>

<style scoped>
.aaa {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px solid #f00;
}
</style>
