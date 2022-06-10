<template>
  <div class="container">
    <div class="case-title">{{ detail.title }}</div>
    <div class="major-container">
      <div class="major-item">
        <div class="title">项目介绍:</div>
        <div class="major">
          <span>{{ detail.introduce }}</span>
        </div>
      </div>
    </div>
    <div class="major-container">
      <div class="major-item">
        <div class="title">责任描述:</div>
        <div v-for="(major, index) in detail.descList" :key="index" class="major">
          <div />
          <span>{{ major }}</span>
        </div>
      </div>
    </div>
    <div v-if="detail.url" class="link" @click="openUrl">前往查看</div>
    <loading :dot="true" :title="'加载中'" :loading="load" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { getCase } from '@/api/services'
import loading from '@/components/loading.vue'

/** ***************  数据声明  ***************/
const route = useRoute()
const state = reactive<any>({
  load: false,
  detail: {}
})

const id = route.query.id
// 请求数据
const casesDetail = () => {
  state.load = true
  getCase().then((res:any) => {
    const info = res.data.result.filter((item: any) => {
      return item.id === id
    })
    state.load = false
    state.detail = info[0]
  })
}

/** ***************  自定义方法  ***************/
const openUrl = () => {
  if (state.detail.value.url) {
    window.open(state.detail.value.url)
  }
}
/** ***************  生命周期  ***************/
onMounted(() => {
  casesDetail()
})

const { load, detail } = toRefs(state)

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
