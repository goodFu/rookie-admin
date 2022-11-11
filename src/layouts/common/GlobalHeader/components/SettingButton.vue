<template>
  <HoverContainer
    class="w-40px h-full"
    tooltip-content="主题配置"
    :inverted="theme.header.inverted"
    @click="app.toggleSettingDrawerVisible"
  >
    <icon-ri-settings-3-line class="text-20px" />
  </HoverContainer>
</template>

<script setup lang="ts">
import { useAppStore, useThemeStore } from '@/store';

defineOptions({ name: 'SettingButton' });

const app = useAppStore();
const theme = useThemeStore();
</script>
