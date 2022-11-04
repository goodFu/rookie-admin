<template>
  <n-config-provider
    :theme="theme.naiveTheme"
    :theme-overrides="theme.naiveThemeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
    class="h-full"
  >
    <NaiveProvider>
      <AdminLayout />
    </NaiveProvider>
  </n-config-provider>
</template>

<script setup lang="ts">
import AdminLayout from './layouts/AdminLayout/index.vue';
import { dateZhCN, zhCN } from 'naive-ui';
import { useThemeStore } from '@/store';

const theme = useThemeStore();
</script>
