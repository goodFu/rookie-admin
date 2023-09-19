<template>
  <BasicLayout
    :mode="mode"
    :is-mobile="isMobile"
    :fixed-header-and-tab="theme.fixedHeaderAndTab"
    :header-height="theme.header.height"
    :tab-visible="theme.tab.visible"
    :tab-height="theme.tab.height"
    :sider-visible="siderVisible"
    :sider-width="siderWidth"
    :sider-collapsed-width="siderCollapsedWidth"
    :sider-collapse="app.siderCollapse"
    :add-main-overflow-hidden="addMainOverflowHidden"
    :fixed-footer="theme.footer.fixed"
    @update:sider-collapse="app.setSiderCollapse"
  >
    <template #header>
      <GlobalHeader v-bind="headerProps" />
    </template>
    <template #tab>
      <div class="flex-center h-full bg-#cccccc">Tab</div>
    </template>
    <template #sider>
      <div class="h-full bg-#d9d9d9">
        <div class="flex-center h-56px">Sider</div>
      </div>
    </template>
    <template #footer>
      <div class="flex-center h-full bg-#e6e6e6">Footer</div>
    </template>
    <icon-ri-sun-fill class="text-testColor" />
    <icon-ri-sun-line class="text-14px text-primary" />
    <SvgIcon name="sun" color="#ff0000" :size="40" />
    <n-space>
      <n-button>Default</n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
    123
  </BasicLayout>
  <GlobalBackTop />
  <SettingDrawer />
</template>

<script setup lang="ts">
import BasicLayout from '../BasicLayout/index.vue';
import { SettingDrawer, GlobalBackTop, GlobalHeader } from '../common';
import { useAppStore, useThemeStore } from '@/store';
import { useBasicLayout } from '@/config';
import { useBoolean } from '../BasicLayout/hooks';

defineOptions({ name: 'AdminLayout' });

const app = useAppStore();
const theme = useThemeStore();

const { bool: addMainOverflowHidden } = useBoolean();
const { mode, isMobile, siderVisible, siderWidth, siderCollapsedWidth, headerProps } =
  useBasicLayout();
</script>
