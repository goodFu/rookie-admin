<template>
  <n-dropdown :options="options" @select="handleDropdown">
    <HoverContainer class="px-12px flex items-center" :inverted="theme.header.inverted">
      <SvgIcon name="avatar" :size="32" />
      <span class="pl-8px text-16px font-medium">Rookie</span>
    </HoverContainer>
  </n-dropdown>
</template>

<script lang="ts" setup>
import type { DropdownOption } from 'naive-ui';
import { useThemeStore } from '@/store';
// import { useIconRender } from '@/composables';

defineOptions({ name: 'UserAvatar' });

// const auth = useAuthStore();
const theme = useThemeStore();
// const { iconRender } = useIconRender();

const options: DropdownOption[] = [
  {
    label: '用户中心',
    key: 'user-center'
    // icon: iconRender({ icon: 'carbon:user-avatar' })
  },
  {
    type: 'divider',
    key: 'divider'
  },
  {
    label: '退出登录',
    key: 'logout'
    // icon: iconRender({ icon: 'carbon:logout' })
  }
];

type DropdownKey = 'user-center' | 'logout';

function handleDropdown(optionKey: string) {
  const key = optionKey as DropdownKey;
  if (key === 'logout') {
    window.$dialog?.info({
      title: '提示',
      content: '您确定要退出登录吗？',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        console.log('confirm');
        // auth.resetAuthStore();
      }
    });
  }
}
</script>
