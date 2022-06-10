<template>
  <div class="nav-bar" :class="[{'open':isOpen},{'pcHide':menuOpen}]">
    <div class="wapMenu" :class="isOpen?'open':''" @click="openMenu">
      <div class="wap" />
    </div>
    <div class="navBox">
      <div class="title">
        <span class="title-item">技</span>
        <span class="title-item">术</span>
      </div>
      <div class="menu">
        <div
          v-for="(item, index) in menuList"
          :key="index"
          class="menu-item"
          :class="{ active: activeIndex === item.meta.index || routeID === item.meta.index }"
          @click="changeIndex(item.meta.index,item.path)"
        >
          {{ item.meta.menuName }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, toRefs, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import store from '@/store'

/** ***************  数据声明  ***************/
const router = useRouter()
const route = useRoute()
const state = reactive<any>({
  menuList: [],
  activeIndex: 0,
  isOpen: false
})

const routerList = router.options.routes
routerList.forEach((item) => {
  if (item.meta && item.meta.showTop) {
    state.menuList.push(item)
  }
})
// 菜单状态
const menuOpen = computed(() => {
  return store.state.menuOpen
})
// 监听路由id
const routeID = computed(() => {
  const idx = state.menuList.findIndex((item) => item.path === route.fullPath)
  let active:any = 0
  if (idx !== -1) {
    state.activeIndex = route.meta.index
    active = route.meta.index
  }
  return active
})

/** 选中菜单 **/
const changeIndex = (index: number, path: string) => {
  state.activeIndex = index
  router.push(path)
}
// 移动端打开菜单
const openMenu = () => {
  state.isOpen = !state.isOpen
}

/* 获取路由信息 */
const getRoute = () => {
  const avtiveTow:any = JSON.parse(sessionStorage.getItem('route') || '')
  const index = route.meta?.index || avtiveTow?.meta?.index
  state.activeIndex = index
}

onMounted(() => {
  getRoute()
})
const {
  menuList,
  activeIndex,
  isOpen
} = toRefs(state)

</script>
<style lang="scss" scoped>
.wapMenu {
  position: fixed;
  left: 20px;
  top: 30px;
  z-index: 100;
  width: 30px;
  height: 30px;
  display: none;
}
.wap {
  position: relative;
  background: #4dacfa;
  height: 2px;
  transition: 0.3s;
}
.wap::after,
.wap::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: #4dacfa;
  transition: 0.3s;
}
.wap::after {
  top: -10px;
}
.wap::before {
  top: 10px;
}
.wapMenu.open .wap {
  background: none;
}
.wapMenu.open .wap::after {
  transform: rotate(45deg);
  top: 0;
}
.wapMenu.open .wap::before {
  transform: rotate(-45deg);
  top: 0;
}
.nav-bar {
  background: #111111;
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  width: 150px;
  height: 100%;
  overflow-y: auto;
  z-index: 99;
  padding: 30px 0;
  text-align: center;
  transition: 0.3s;
  &.pcHide{
    left: -150px;
  }
  .title {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
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
    .menu-item {
      font-size: 14px;
      padding: 20px;
    }

    .active {
      background: #4dacfa;
    }

    .menu-item:hover {
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 768px) {
  .wapMenu {
    display: block;
  }
  .nav-bar {
    padding-top: 80px;
    left: -100%;
    &.open {
      left: 0;
    }
  }
}
</style>
