<template>
  <div>
    <top-tool title="技术" class="w1200" @more="more" />
    <Technology :data="data" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, defineProps, defineEmits } from 'vue'
import TopTool from '@/components/TopTool.vue'
import Technology from '../../Technology/index.vue'

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
// 详情
const showDetail = (item: any) => {
  item.url && window.open(item.url)
}

</script>
<style lang="scss" scoped>

</style>
