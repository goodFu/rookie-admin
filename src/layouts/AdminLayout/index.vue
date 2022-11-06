<template>
  <BasicLayout
    :mode="mode"
    :is-mobile="isMobile"
    :fixed-header-and-tab="fixedHeaderAndTab"
    :fixed-footer="fixedFooter"
    :sider-collapse="siderCollapse"
    @update:sider-collapse="setSiderCollapse"
  >
    <template #header>
      <div class="flex-center h-full bg-#e6e6e6">Header</div>
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
    <div class="fixed right-0 top-120px px-12px whitespace-nowrap">
      <div>
        <h4>layout mode:</h4>
        <div v-for="item in modeList" :key="item">
          <span class="pr-8px">{{ item }}</span>
          <input
            type="radio"
            name="mode"
            :value="item"
            :checked="item === mode"
            class="cursor-pointer"
            @change="setMode(item)"
          />
        </div>
      </div>
      <div class="pt-24px">
        <span class="pr-8px">isMobile</span>
        <input type="checkbox" :checked="isMobile" @change="toggleIsMobile" />
      </div>
      <div class="pt-24px">
        <span class="pr-8px">fixedHeaderAndTab</span>
        <input type="checkbox" :checked="fixedHeaderAndTab" @change="toggleFixedHeaderAndTab" />
      </div>
      <div class="pt-24px">
        <span class="pr-8px">fixedFooter</span>
        <input type="checkbox" :checked="fixedFooter" @change="toggleFixedFooter" />
      </div>
      <div class="pt-24px">
        <span class="pr-8px">siderCollapse</span>
        <input type="checkbox" :checked="siderCollapse" @change="toggleSiderCollapse" />
      </div>
    </div>
    <icon-ri-sun-fill class="text-testColor" />
    <icon-ri-sun-line class="text-14px text-primary" />
    <SvgIcon name="sun" color="#ff0000" :size="40" />
  </BasicLayout>
  <SettingDrawer />
</template>

<script setup lang="ts">
import BasicLayout from '../BasicLayout/index.vue';
import SettingDrawer from '../common/SettingDrawer/index.vue';
import { useBoolean } from '../BasicLayout/hooks';

type Mode = 'vertical' | 'horizontal';
const mode = ref<Mode>('vertical');
const modeList: Mode[] = ['vertical', 'horizontal'];
function setMode(value: Mode) {
  mode.value = value;
}

const { bool: isMobile, toggle: toggleIsMobile } = useBoolean();
const { bool: fixedHeaderAndTab, toggle: toggleFixedHeaderAndTab } = useBoolean(true);
const { bool: fixedFooter, toggle: toggleFixedFooter } = useBoolean();
const {
  bool: siderCollapse,
  setBool: setSiderCollapse,
  toggle: toggleSiderCollapse
} = useBoolean();
</script>
