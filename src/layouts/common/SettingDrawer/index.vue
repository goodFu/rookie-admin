<template>
  <n-drawer
    :show="app.settingDrawerVisible"
    display-directive="show"
    :width="330"
    @mask-click="app.closeSettingDrawer"
  >
    <n-drawer-content title="主题配置" :native-scrollbar="false">
      <DarkMode />
      <LayoutMode />
      <ThemeColorSelect />
    </n-drawer-content>
  </n-drawer>
  <DrawerButton />
</template>

<script setup lang="ts">
import { useAppStore } from '@/store';
import { DrawerButton, DarkMode, LayoutMode, ThemeColorSelect } from './components';
const app = useAppStore();
defineOptions({ name: 'SettingDrawer' });
</script>
