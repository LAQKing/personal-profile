<template>
  <div>
    <top-nav-bar />
    <div class="main">
      <router-view v-slot="{ Component }">
        <keep-alive :include="includeList">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <bottom-bar style="margin-top: 50px" @click="moreInfo" />
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, watch, toRefs } from '@vue/runtime-core'
import TopNavBar from '@/components/TopNavBar.vue' // @ is an alias to /src
import BottomBar from '@/components/BottomBar/index.vue' // @ is an alias to /src
import { useRoute, useRouter } from 'vue-router'
export default {
  components: {
    TopNavBar,
    BottomBar
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
      },
      { deep: true }
    ) // 开启深度监听
    onMounted(() => {})

    const moreInfo = () => {
      window.scrollTo(0, 0)
      router.push('about')
    }

    return {
      ...toRefs(state),
      route,
      moreInfo
    }
  }
}
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #4dacfa;
    }
  }
}
.main{
  min-height: 63.85vh;
}
</style>
