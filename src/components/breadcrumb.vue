<template>
  <div class="crumbs" :class="menuOpen?'open':''">
    <a-breadcrumb separator-icon="ArrowRight">
      <icon-menu-unfold v-if="menuOpen" size="24" class="unfold" @click="clickMenu" />
      <icon-menu-fold v-else size="24" class="unfold" @click="clickMenu" />
      <a-breadcrumb-item v-for="(item,index) in crumbs" :key="index" @click="goPath(item.path,index+1)">{{ item.meta.menuName }}</a-breadcrumb-item>
      <template #separator>
        <icon-right />
      </template>
    </a-breadcrumb>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, toRefs, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import store from '@/store'

const route = useRoute()
const router = useRouter()
const state = reactive<any>({
  crumbs: [],
  menuOpen: false
})
watch(
  () => route.path,
  () => {
    breadcrumb()
  }
)

// 获取菜单
const breadcrumb = () => {
  const rou:any = JSON.parse(sessionStorage.getItem('route') || '')
  const routerList:Array<any> = router.options.routes
  const meta = route.meta
  const arr = routerList.filter((item) => item.meta.index === meta.index)
  const isprent = arr.filter((item) => item.meta.menuName === meta.parentName)
  if (Object.keys(meta).length === 0) {
    state.crumbs = [rou]
  } else {
    if (isprent.length) {
      state.crumbs = arr
    } else {
      state.crumbs = arr.slice(0, 1)
    }
  }
}
/** 跳转 */
const goPath = (path, len) => {
  if (len !== state.crumbs.length) {
    router.push({ path: path })
  }
}
// 展开收起左侧菜单
const clickMenu = () => {
  state.menuOpen = !state.menuOpen
  store.state.menuOpen = state.menuOpen
}
onMounted(() => {
  breadcrumb()
})

const { crumbs, menuOpen } = toRefs(state)

</script>
<style lang="scss" scoped>
.arco-breadcrumb{
  display: flex;
  align-items: center;
}
.arco-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    color: inherit;
    font-style: normal;
    vertical-align: -2px;
    outline: none;
    stroke: currentColor;
}
.crumbs{
  position: fixed;
  left: 150px;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 50px;
  background: white;
  padding: 10px 15px;
  transition: 0.3s;
  &.open{
    left: 0;
  }
}
.unfold{
  margin-right: 5px;
  cursor: pointer;
}
::v-deep .arco-breadcrumb-item{
  cursor: pointer;
  &:last-child{
    cursor: default;
  }
}
::v-deep .arco-breadcrumb-item-separator{
  color: #999;
}
@media screen and (max-width:768px) {
  .crumbs{
    display: none;
  }
}
</style>
