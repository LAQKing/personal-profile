<template>
  <div>
    <top-tool title="技术" @more="more" />
    <div class="container">
      <div
        v-for="item in data"
        :key="item.title"
        class="tech-item"
        @click="showDetail(item)"
      >
        <div class="title">{{ item.title }}</div>
        <div class="content">
          {{ item.desc }}
        </div>
        <div class="more">
          <div>
            <div class="date year">{{ item.date }}</div>
            <div class="year">{{ item.year }}</div>
          </div>
          <div class="arrow-container">
            <img src="@/assets/arrow_active.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// import { onMounted } from 'vue'
import TopTool from '@/components/TopTool.vue' // @ is an alias to /src

export default {
  components: {
    TopTool
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup(prop: any, context: any) {
    /** ***************  数据声明  ***************/
    /** ***************  生命周期  ***************/
    /** ***************  自定义方法  ***************/
    const showDetail = (item: any) => {
      item.url && window.open(item.url)
    }
    const more = () => {
      context.emit('more')
    }
    /** ***************  网络请求  ***************/
    return {
      showDetail,
      more
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  .tech-item {
    width: 30%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(233, 233, 233, 100);
    box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);
    transition: all 0.3s;
    .title {
      padding: 20px 10px;
      font-size: 18px;
      font-weight: bold;
    }
    .content {
      margin: 10px;
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }

    .more {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background: #e9e9e9;

      .year {
        font-size: 12px;
        color: #4dacfa;
        text-align: left;
      }

      .date {
        font-size: 20px;
        font-weight: bold;
      }
      .arrow-container {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: #4dacfa;
        opacity: 0;
        img {
          width: 20px;
          height: 20px;
          transform: translateY(50%);
        }
      }
    }
  }

  .tech-item:hover {
    cursor: pointer;
    background: #4dacfa;
    border: none;
    color: white;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.12);
    .more {
      background: white;
    }
    .arrow-container {
      opacity: 1;
    }
  }
}
</style>
