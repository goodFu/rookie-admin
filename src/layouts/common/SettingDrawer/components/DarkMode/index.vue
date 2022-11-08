<template>
  <n-divider title-placement="center">主题模式</n-divider>
  <n-space vertical size="large">
    <setting-menu label="深色主题">
      <n-switch :value="theme.darkMode" @update:value="theme.setDarkMode">
        <template #checked>
          <icon-ri-sun-line class="text-14px text-primary" />
        </template>
        <template #unchecked>
          <icon-ri-moon-line class="text-14px text-primary" />
        </template>
      </n-switch>
    </setting-menu>
    <setting-menu label="跟随系统">
      <n-switch :value="theme.followSystemTheme" @update:value="theme.setFollowSystemTheme">
        <template #checked>
          <icon-ri-forbid-line class="text-14px text-primary" />
        </template>
        <template #unchecked>
          <icon-ri-notification-badge-fill class="text-14px text-primary" />
        </template>
      </n-switch>
    </setting-menu>
  </n-space>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store';
import SettingMenu from '../SettingMenu/index.vue';

defineOptions({ name: 'DarkMode' });

const theme = useThemeStore();
</script>
<style scoped>
:deep(.n-switch__rail) {
  background-color: #000e1c !important;
}
</style>
