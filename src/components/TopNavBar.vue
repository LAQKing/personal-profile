<template>
  <div class="nav-bar">
    <div class="w1200 navBox">
      <div class="title">
        <span class="title-item">技</span>
        <span class="title-item">术</span>
      </div>
      <div class="menu">
        <div v-for="(menu, index) in menuList" :key="menu" class="menu-item" :class="{ active: activeIndex === index }" @click="changeIndex(index)">
          {{ menu }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    /** ***************  数据声明  ***************/
    const router = useRouter()
    const route = useRoute()
    const menuList = reactive(['首页', '案例', '技术', '关于'])
    const activeIndex = ref(0)
    const routeList = ['/', '/case', '/technology', '/about']

    /** ***************  生命周期  ***************/
    watch(
      () => route.path,
      () => {
        const path = route.path
        const index = routeList.indexOf(path)
        if (index === -1) {
          // router.replace("/");
          activeIndex.value = -1
        } else {
          activeIndex.value = index
        }
      }
    )

    /** ***************  自定义方法  ***************/
    const changeIndex = (index: number) => {
      activeIndex.value = index
      const path = routeList[index]
      router.replace(path)
    }

    /** ***************  网络请求  ***************/

    return {
      menuList,
      activeIndex,
      changeIndex
    }
  }
}
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.nav-bar {
  background: #111111;
  color: white;
  .navBox {
    height: 100px;
    display: flex;
    align-items: center;
  }
  .title {
    display: flex;
  }
  .title-item {
    display: block;
    line-height: 26px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 2px solid white;
    margin-right: 5px;
  }
  .menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .menu-item {
      font-size: 14px;
      height: 30px;
      line-height: 30px;
      padding: 0 20px;
      border-radius: 15px;
      margin: 0 5px;
    }

    .active {
      background: #4dacfa;
    }

    .menu-item:hover {
      cursor: pointer;
    }
  }
}
</style>
