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
<script lang="ts">
// import { onMounted } from 'vue'
export default {
  props: {
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
  },
  setup(prop: any, context: any) {
    /** ***************  数据声明  ***************/

    /** ***************  生命周期  ***************/

    // onMounted(() => {});

    /** ***************  自定义方法  ***************/
    const more = () => {
      context.emit('more')
    }

    /** ***************  网络请求  ***************/

    return {
      more
    }
  }
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
