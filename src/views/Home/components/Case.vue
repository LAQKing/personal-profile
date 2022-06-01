<template>
  <div>
    <top-tool title="案例" @more="more" />
    <div class="container">
      <div
        v-for="item in data"
        :key="item.title"
        class="case-item"
        :style="{
          background: 'url(' + getIcon(item.icon) + ')',
          'background-size': '100% 100%',
        }"
        @click="showDetail(item)"
      >
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
  </div>
</template>
<script lang="ts">
// import { reactive } from 'vue'
import TopTool from '@/components/TopTool.vue' // @ is an alias to /src
import { useRouter } from 'vue-router'

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
    const router = useRouter()
    const getIcon = (icon: string) => {
      return require(`@/assets/case/${icon}.png`)
    }
    const more = () => {
      context.emit('more')
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
    return {
      getIcon,
      more,
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
  padding: 10px 0;
  .case-item {
    width: 32%;
    height: 200px;
    background: #4dacfa;
    margin-bottom: 20px;
    margin-right: 2%;
    position: relative;
    box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);

    &:nth-child(3n){
      margin-right: 0;
    }
    .info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background: white;
      font-size: 15px;
      text-align: left;
      padding: 5px 10px;
      opacity: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .arrow-container {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: #4dacfa;
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
    .info {
      transition: 0.8s;
      opacity: 1;
    }
  }
}
</style>
