<template>
  <div class="top-tool">
    <div class="tool-tag">
      <div v-if="showTag" class="tag-line" />
      <span>{{ title }}</span>
    </div>
    <div v-if="showMore" class="more" @click="more">
      <img src="@/assets/arrow_normal.png">
      <img src="@/assets/arrow_active.png">
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  showTag: {
    type: Boolean,
    default: false
  },
  showMore: {
    type: Boolean,
    default: true
  }
})
/**
 * 计算属性
 */
const title = computed(() => {
  return props.title
})
const showTag = computed(() => {
  return props.showTag
})
const showMore = computed(() => {
  return props.showMore
})
/**
 * 抛出事件，给父组件调用
 */
const emit = defineEmits(['more'])
const more = () => {
  emit('more')
}

</script>
<style lang="scss" scoped>
.top-tool {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .tool-tag {
    display: flex;
    .tag-line {
      width: 5px;
      margin-right: 10px;
      background: #4dacfa;
    }
  }

  span {
    color: #101010;
    font-size: 20px;
  }

  .more {
    position: relative;
    width: 95px;
    border-radius: 40px;
    border: 1px solid rgba(233, 233, 233, 100);
    padding: 5px 0;
    text-align: center;
    img {
      width: 40px;
      height: 20px;
    }
    img:last-child {
      display: none;
    }
  }
  .more:hover {
    cursor: pointer;
    background: #4dacfa;
    img:first-child {
      display: none;
    }
    img:last-child {
      display: inline;
    }
  }
}
</style>
