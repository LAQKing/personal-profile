<template>
  <div class="container">
    <div
      v-for="item in cases"
      :key="item.title"
      class="case-item"
      @click="showDetail(item)"
    >
      <div
        class="bg-icon"
        :style="{
          background: 'url(' + getIcon(item.icon) + ')',
          'background-size': '100% 100%',
        }"
      />
      <div class="info">
        <div>
          <div>{{ item.title }}</div>
          <div style="font-size: 12px">{{ item.type }}</div>
        </div>
        <div class="arrow-container">
          <img src="@/assets/arrow_active.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { getCase } from '@/api/services'

export default {
  setup() {
    const router = useRouter()
    const state = reactive<any>({
      cases: []
    })
    // 请求数据
    const cases = () => {
      getCase().then((res:any) => {
        state.cases = res.data.result
      })
    }

    const getIcon = (icon: string) => {
      return require(`@/assets/case/${icon}.png`)
    }

    const showDetail = (item: any) => {
      window.scrollTo(0, 0)
      const id = item.icon
      router.push({
        name: 'CaseDetail',
        params: {
          id: id
        }
      })
    }
    onMounted(() => {
      cases()
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
.container {
  display: flex;
  flex-wrap: wrap;
  //   justify-content: space-between;
  align-items: center;
  padding: 100px 300px 0 300px;

  .case-item {
    width: 32%;
    height: 220px;
    background: #4dacfa;
    margin-bottom: 20px;
    margin-right: 2%;
    position: relative;
    cursor: pointer;
    box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);
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
      right: 0;
      bottom: 0;
      background: white;
      font-size: 15px;
      text-align: left;
      padding: 10px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .arrow-container {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: #4dacfa;
        // opacity: 0;
        img {
          width: 20px;
          height: 20px;
          transform: translate(50%, 50%);
        }
      }
    }
  }
  // .case-item:hover {
  //   cursor: pointer;
  //   box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);
  //   .arrow-container {
  //     transition: all 1s;
  //     opacity: 1;
  //   }
  // }
}
</style>
