<template>
  <div class="tech-container w1200">
    <div
      v-for="item in (homeTech.length?homeTech:technologys)"
      :key="item.title"
      class="tech-item"
      @click="showDetail(item)"
    >
      <img class="icon" :src="getIcon(item.icon)">
      <div class="content">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
        <span class="date">{{ item.year + "-" + item.date }}</span>
      </div>
      <div class="more">
        <img src="@/assets/arrow_normal.png">
      </div>
    </div>
    <loading :dot="true" :title="'加载中'" :loading="load" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, toRefs, defineProps, computed } from 'vue'
import { getBlog } from '@/api/services'
import loading from '@/components/loading.vue'
const props = defineProps({
  data: {
    type: Array,
    default: () => {
      return []
    }
  }
})
// 首页数据
const homeTech = computed(() => {
  return props.data
})

const state = reactive<any>({
  load: false,
  technologys: []
})

// 请求数据
const techs = () => {
  state.load = true
  getBlog().then((res:any) => {
    state.load = false
    state.technologys = res.data.result
  })
}

const getIcon = (icon: string) => {
  if (icon) {
    return icon
  }
  return require('@/assets/logo.png')
}

// 详情
const showDetail = (item: any) => {
  item.url && window.open(item.url)
}

onMounted(() => {
  techs()
})

const { technologys, load } = toRefs(state)

</script>
<style lang="scss" scoped>
.tech-container {
  position: relative;
  padding-top: 30px;
}
.tech-item {
  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7f7f7;
  padding: 10px 20px;
  margin-bottom: 20px;
  transition: .3s;
  position: relative;
  .icon {
    width: 200px;
    height: 150px;
    background: white;
  }

  .date {
    font-size: 13px;
    color: #919191;
    margin-top: 10px;
    display: block;
  }

  .content {
    padding: 0 20px;
    text-align: left;
    flex: 1;

    .title {
      font-size: 20px;
      color: #111111;
      margin-bottom: 10px;
    }

    .desc {
      font-size: 14px;
      color: #919191;
      letter-spacing: 2px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }

  .more {
    position: relative;
    width: 40px;
    height: 40px;
    line-height: 20px;
    border-radius: 40px;
    img {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 50%);
      width: 30px;
      height: 20px;
    }
  }
}
.tech-item:hover {
  cursor: pointer;
  background: #4dacfa;
  .more {
    border-radius: 40px;
    background: white;
  }
  .date {
    color: white;
  }
  .content {
    .title {
      color: white;
    }

    .desc {
      color: white;
    }
  }
}
@media screen and (max-width:768px) {
  .tech-item{
    padding: 10px;
  }
  .tech-item .content{
    padding: 0 10px 5px;
  }
  .tech-item .icon{
    width: 30%;
    height: 100px;
  }
  .tech-item .content .title{
    font-size: 16px;
    margin-bottom: 5px;
  }
  .tech-item .content .desc{
    -webkit-line-clamp:2;
  }

}
</style>
