<template>
  <SvgIcon name="logo-fill" :color="color" :size="size" v-if="fill" />
  <SvgIcon name="logo" :color="color" :size="size" v-else />
</template>

<script lang="ts" setup>
defineOptions({ name: 'SystemLogo' });

interface Props {
  /** logo是否填充 */
  fill?: boolean;
  color?: string;
  size?: number;
}

withDefaults(defineProps<Props>(), {
  fill: false,
  size: 20
});
</script>
