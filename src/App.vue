<template>
  <div class="app" :class="menuOpen?'menuOpen':''">
    <top-nav-bar />
    <breadcrumb />
    <div class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="includeList">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <bottom-bar style="margin-top: 50px" @click="moreInfo" />
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, watch, toRefs, computed } from '@vue/runtime-core'
import TopNavBar from '@/components/TopNavBar.vue' // 菜单栏 menu
import BottomBar from '@/components/bottom.vue' // 底部信息 bottom
import breadcrumb from '@/components/breadcrumb.vue' // 面包屑 breadcrumb
import { useRoute, useRouter } from 'vue-router'
import store from '@/store'
export default {
  components: {
    TopNavBar,
    BottomBar,
    breadcrumb
  },

  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive<any>({
      includeList: []
    })
    watch(
      () => route,
      (newVal, oldVal) => {
        if (newVal.meta.keepAlive && state.includeList.indexOf(newVal.name) === -1) {
          state.includeList.push(newVal.name)
        }
        setTimeout(() => {
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
        }, 300)
      },
      { deep: true }
    ) // 开启深度监听
    // 菜单状态
    const menuOpen = computed(() => {
      return store.state.menuOpen
    })

    onMounted(() => {})

    const moreInfo = () => {
      window.scrollTo(0, 0)
      router.push('about')
    }

    return {
      ...toRefs(state),
      route,
      moreInfo,
      menuOpen
    }
  }
}
</script>
<style lang="scss">
.app{
  padding-left: 150px;
  padding-top: 50px;
  transition: 0.3s;
  &.menuOpen{
    padding-left: 0;
  }
}
.main{
  min-height: calc(100vh - 300px);
  position: relative;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
@media screen and (max-width:768px) {
.app{
  padding-top: 0;
  padding-left: 0;
}
}
</style>
