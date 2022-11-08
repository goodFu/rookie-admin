<template>
  <DarkModeContainer
    class="global-header flex items-center h-full"
    :inverted="theme.header.inverted"
  >
    <GlobalLogo
      v-if="showLogo"
      :show-title="true"
      class="h-full"
      :style="{ width: theme.sider.width + 'px' }"
    />
    <div v-if="!showHeaderMenu" class="flex-1 overflow-hidden flex items-center h-full">
      <!-- <menu-collapse v-if="showMenuCollapse || isMobile" />
      <global-breadcrumb v-if="theme.header.crumb.visible && !isMobile" /> -->
    </div>
    <!-- <header-menu v-else /> -->
    <div class="flex justify-end h-full">
      <!-- <global-search />
      <github-site />
      <full-screen />
      <theme-mode />
      <system-message />
      <setting-button />
      <user-avatar /> -->
      123
    </div>
  </DarkModeContainer>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store';
// import { useBasicLayout } from '@/config';
import GlobalLogo from '../GlobalLogo/index.vue';
// import GlobalSearch from '../GlobalSearch/index.vue';
// import // FullScreen,
// // GithubSite,
// // GlobalBreadcrumb,
// // HeaderMenu,
// // MenuCollapse
// // SettingButton,
// // SystemMessage,
// // ThemeMode,
// // UserAvatar
// './components';

defineOptions({ name: 'GlobalHeader' });

interface Props {
  /** 显示logo */
  showLogo: GlobalHeaderProps['showLogo'];
  /** 显示头部菜单 */
  showHeaderMenu: GlobalHeaderProps['showHeaderMenu'];
  /** 显示菜单折叠按钮 */
  showMenuCollapse: GlobalHeaderProps['showMenuCollapse'];
}

defineProps<Props>();

const theme = useThemeStore();
// const { isMobile } = useBasicLayout();

// const showButton = import.meta.env.PROD && import.meta.env.VITE_VERCEL !== 'Y';
</script>

<style scoped>
.global-header {
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}
</style>
