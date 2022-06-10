<template>
  <div v-if="loading" class="loading">
    <a-spin class="aspin" :tip="title" :dot="dot" />
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  title: { // 提示标题
    type: String,
    default: () => {
      return ''
    }
  },
  dot: { // 是否使用点类型的动画
    type: Boolean,
    default: () => {
      return false
    }
  },
  loading: { // 是否显示
    type: Boolean,
    default: () => {
      return true
    }
  }
})
/**
 * 计算属性
 */
const title = computed(() => {
  return props.title
})
const dot = computed(() => {
  return props.dot
})
const loading = computed(() => {
  return props.loading
})

</script>
<style lang="scss" scoped>
.loading{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
}
.aspin{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 99;
}
::v-deep .arco-spin-tip{
  text-align: right;
}
</style>
