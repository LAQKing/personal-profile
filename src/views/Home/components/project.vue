<template>
  <div>
    <TopTool title="案例" @more="more" />
    <case-box :data="data" />
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import caseBox from '../../project/index.vue'
import TopTool from '@/components/TopTool.vue'

// 添加默认值
const props = defineProps({
  data: {
    type: Array,
    default: () => {
      return []
    }
  }
})

const emit = defineEmits(['more'])
const more = () => {
  emit('more')
}

</script>
<style lang="scss" scoped>

</style>
