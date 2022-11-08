<template>
  <router-link
    to="/"
    class="flex items-center justify-center w-full whitespace-nowrap overflow-hidden"
  >
    <SystemLogo class="text-primary" :size="32" />
    <h2
      v-show="showTitle"
      class="pl-8px text-18px font-bold text-primary transition duration-300 ease-in-out"
    >
      rookie管理系统
    </h2>
  </router-link>
</template>

<script setup lang="ts">
defineOptions({ name: 'GlobalLogo' });

interface Props {
  /** 显示名字 */
  showTitle: boolean;
}

defineProps<Props>();
</script>
