<template>
  <n-button
    type="primary"
    :class="[
      { '!right-330px': app.settingDrawerVisible },
      app.settingDrawerVisible ? 'ease-out' : 'ease-in'
    ]"
    class="fixed top-360px right-14px z-10000 w-42px h-42px !p-0 transition-all duration-300"
    @click="app.toggleSettingDrawerVisible"
  >
    <div v-if="app.settingDrawerVisible" class="i-ri-close-line text-24px"></div>
    <div v-else class="i-ri-tools-fill text-24px"></div>
  </n-button>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store';

defineOptions({ name: 'DrawerButton' });

const app = useAppStore();
</script>
