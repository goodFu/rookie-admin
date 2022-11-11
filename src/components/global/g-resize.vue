<template>
  <div class="resize-observer" tabindex="-1" ref="resizeRef"></div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
const resizeRef = ref();
const emit = defineEmits<Emits>();
let initCompat = reactive<any>({});
// ! 要获取宽度的元素 将其位置设置为'static'（例如'relative'）以外的其他定位
let isIE: boolean;
let _w = ref(0);
let _h = ref(0);
let _resizeObject: HTMLObjectElement | null;

interface Props {
  /* 首次是否返回宽高 */
  emitOnMount?: boolean;
  ignoreWidth?: boolean;
  ignoreHeight?: boolean;
}

interface Emits {
  /* 返回宽高数据 */
  (e: 'notify', value: { width?: number; height?: number }): void;
}

const props = withDefaults(defineProps<Props>(), {
  emitOnMount: false,
  ignoreWidth: false,
  ignoreHeight: false
});

onMounted(async () => {
  initCompatFn();

  const object: HTMLObjectElement = document.createElement('object');
  _resizeObject = object;
  object.setAttribute('aria-hidden', 'true');
  object.setAttribute('tabindex', '-1');
  object.onload = addResizeHandlers;
  object.type = 'text/html';
  if (isIE) {
    resizeRef.value.appendChild(object);
  }
  object.data = 'about:blank';
  if (!isIE) {
    resizeRef.value.appendChild(object);
  }

  await nextTick();
  _w.value = resizeRef.value.offsetWidth;
  _h.value = resizeRef.value.offsetHeight;
  if (props.emitOnMount) {
    emitSize();
  }
});

onBeforeUnmount(() => {
  removeResizeHandlers();
});

const initCompatFn = () => {
  if (!initCompat.init) {
    initCompat.init = true;
    isIE = getInternetExplorerVersion() !== -1;
  }
};

/* 判断当前浏览器环境 */
const getInternetExplorerVersion = () => {
  const ua = window.navigator.userAgent;

  const msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  const trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    const rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  const edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return -1;
};

const addResizeHandlers = () => {
  _resizeObject?.contentDocument?.defaultView?.addEventListener('resize', compareAndNotify);
  compareAndNotify();
};

const compareAndNotify = () => {
  if (
    (!props.ignoreWidth && _w.value !== resizeRef.value.offsetWidth) ||
    (!props.ignoreHeight && _h.value !== resizeRef.value.offsetHeight)
  ) {
    _w.value = resizeRef.value.offsetWidth;
    _h.value = resizeRef.value.offsetHeight;
    emitSize();
  }
};

const removeResizeHandlers = () => {
  if (_resizeObject && _resizeObject.onload) {
    if (!isIE && _resizeObject.contentDocument) {
      _resizeObject?.contentDocument?.defaultView?.removeEventListener('resize', compareAndNotify);
    }
    resizeRef.value.removeChild(_resizeObject);
    _resizeObject.onload = null;
    _resizeObject = null;
  }
};

const emitSize = () => {
  emit('notify', {
    width: _w.value,
    height: _h.value
  });
};
</script>

<style scoped>
.resize-observer {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  background-color: transparent;
  border: none;
  opacity: 0;
}

.resize-observer >>> object {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}
</style>
