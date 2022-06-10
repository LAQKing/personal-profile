<template>
  <div class="container w1200">
    <div v-for="item in (homeCases.length?homeCases:cases)" :key="item.title" class="case-item" @click="showDetail(item)">
      <div class="bg-icon" />
      <img :src="getIcon(item.icon)" alt="" class="img">
      <div class="info">
        <div class="txt">
          <div>{{ item.title }}</div>
          <div class="type">{{ item.type }}</div>
        </div>
        <div class="arrow-container">
          <img src="@/assets/arrow_active.png">
        </div>
      </div>
    </div>
    <loading :dot="true" :title="'加载中'" :loading="load" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, toRefs, defineProps, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getCase } from '@/api/services'
import loading from '@/components/loading.vue'
const props = defineProps({
  data: {
    type: Array,
    default: () => {
      return []
    }
  }
})
const router = useRouter()
const state = reactive<any>({
  load: false,
  cases: []
})
// 请求数据
const getData = () => {
  state.load = true
  getCase().then((res:any) => {
    state.load = false
    state.cases = res.data.result
  })
}

// 首页数据
const homeCases = computed(() => {
  return props.data
})

const getIcon = (icon: string) => {
  return require(`@/assets/case/${icon}.png`)
}

const showDetail = (item: any) => {
  const id = item.id
  router.push({
    path: 'projectDetail',
    query: {
      id: id
    }
  })
}
onMounted(() => {
  getData()
})
const { cases, load } = toRefs(state)
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  //   justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  .case-item {
    width: 32%;
    height: 220px;
    margin-bottom: 20px;
    margin-right: 2%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);
    .img{
      position: absolute;
      left: 50%;
      top: 50%;
      min-width: 60%;
      max-height: 100%;
      transform: translate(-50%,-50%);
    }
    &:nth-child(3n){
      margin-right: 0;
    }
    .bg-icon {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 180px;
    }
    .info {
      position: absolute;
      left: 0;
      bottom: -100%;
      width: 100%;
      height: 100%;
      background: #4dacfa80;
      font-size: 15px;
      text-align: left;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      transition: 0.3s;
      align-items: center;
      .txt{
        width: 100%;
        text-align: center;
        color: white;
        font-size: 20px;
      }
      .type{
        font-size: 14px;
        margin-top: 10px;
      }
      .arrow-container {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: #4dacfa;
        margin: 0 auto;
        img {
          width: 20px;
          height: 20px;
          transform: translate(50%, 50%);
        }
      }
    }
  }
  .case-item:hover {
    cursor: pointer;
    box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);
    .info{
      bottom: 0;
    }
    .arrow-container {
      transition: all 1s;
      opacity: 1;
    }
  }
}
</style>
