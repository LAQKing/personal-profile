import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// keepAlive 需要缓存的页面
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    meta: { keepAlive: true, menuName: '首页', showTop: true, index: 0 }
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('@/views/project/index.vue'),
    meta: { menuName: '项目', showTop: true, index: 1 }
  },
  {
    path: '/projectDetail',
    name: 'ProjectDetail',
    component: () => import('@/views/projectDetail/index.vue'),
    meta: { parentName: '项目', menuName: '项目详情', showTop: false, index: 1 }
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import('@/views/Technology/index.vue'),
    meta: { menuName: '技术', showTop: true, index: 2 }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/index.vue'),
    meta: { menuName: '简介', showTop: true, index: 3 }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
