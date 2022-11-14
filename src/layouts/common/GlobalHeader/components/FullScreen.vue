<template>
  <HoverContainer
    class="w-40px h-full"
    tooltip-content="全屏"
    :inverted="theme.header.inverted"
    @click="toggle"
  >
    <icon-ri-fullscreen-exit-fill v-if="isFullscreen" class="text-18px" />
    <icon-ri-fullscreen-fill v-else class="text-18px" />
  </HoverContainer>
</template>

<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';
import { useThemeStore } from '@/store';

defineOptions({ name: 'FullScreen' });

const { isFullscreen, toggle } = useFullscreen();
const theme = useThemeStore();
</script>
