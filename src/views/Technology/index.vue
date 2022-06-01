<template>
  <div class="tech-container w1200">
    <div
      v-for="item in technologys"
      :key="item.title"
      class="tech-item"
      @click="showDetail(item)"
    >
      <img class="icon" :src="getIcon(item.icon)">
      <div class="content">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
      <span class="date">{{ item.year + "-" + item.date }}</span>
      <div class="more">
        <img src="@/assets/arrow_normal.png">
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import { getTechnologys } from '@/api/services'

export default {
  setup() {
    const state = reactive<any>({
      technologys: []
    })
    const getIcon = (icon: string) => {
      if (icon) {
        return icon
      }
      return require('@/assets/logo.png')
    }
    // 请求数据
    const techs = () => {
      getTechnologys().then((res:any) => {
        state.technologys = res.data.result
      })
    }
    // 详情
    const showDetail = (item: any) => {
      item.url && window.open(item.url)
    }
    onMounted(() => {
      techs()
    })
    return {
      ...toRefs(state),
      getIcon,
      showDetail
    }
  }
}
</script>
<style lang="scss" scoped>
.tech-container {
  padding-top: 50px;
}
.tech-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7f7f7;
  padding: 10px 20px;
  margin-bottom: 20px;

  position: relative;

  .icon {
    width: 200px;
    height: 150px;
    background: white;
  }

  .date {
    position: absolute;
    bottom: 10px;
    left: 240px;
    font-size: 13px;
    color: #919191;
  }

  .content {
    padding: 0 20px;
    text-align: left;
    flex: 1;

    .title {
      font-size: 20px;
      color: #111111;
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
  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);
  transition: all 1s;
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
</style>
