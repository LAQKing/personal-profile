<template>
  <div class="container">
    <div class="case-title">{{ info.title }}</div>
    <div class="major-container">
      <div class="major-item">
        <div class="title">项目介绍:</div>
        <div class="major">
          <span>{{ info.introduce }}</span>
        </div>
      </div>
    </div>
    <div class="major-container">
      <div class="major-item">
        <div class="title">责任描述:</div>
        <div v-for="(major, index) in info.descList" :key="index" class="major">
          <div />
          <span>{{ major }}</span>
        </div>
      </div>
    </div>
    <div v-if="info.url" class="link" @click="openUrl">前往查看</div>
  </div>
</template>
<script lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const dataList = require('@/json/getCaseList.json')

export default {
  setup() {
    /** ***************  数据声明  ***************/
    const route = useRoute()
    const id = route.params.id
    const info: any = computed(() => {
      const detail = dataList.result.filter((item: any) => {
        return item.icon === id
      })
      return detail[0]
    })

    /** ***************  生命周期  ***************/
    /** ***************  自定义方法  ***************/
    const openUrl = () => {
      if (info.value.url) {
        window.open(info.value.url)
      }
    }

    /** ***************  网络请求  ***************/

    return {
      info,
      openUrl
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 50px 300px 0 300px;

  .case-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
  }

  .link {
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    color: #3498db;
    cursor: pointer;
  }
}
.major-container {
  text-align: left;
  padding: 10px;

  .major-item {
    margin-bottom: 20px;
    .title {
      font-size: 22px;
      font-weight: bold;
    }
    .major {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: bold;
      margin-top: 10px;

      div {
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: black;
        margin-right: 20px;
      }
    }
  }
}
</style>
