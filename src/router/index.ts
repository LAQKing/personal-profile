import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

import home from '@/views/Home/index.vue'
import project from '@/views/project/index.vue'
import projectDetail from '@/views/projectDetail/index.vue'
import technology from '@/views/Technology/index.vue'
import about from '@/views/About/index.vue'
// keepAlive:true 需要缓存的页面
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: home,
    meta: { keepAlive: true, menuName: '首页', showTop: true, index: 0 }
  },
  {
    path: '/project',
    name: 'Project',
    component: project,
    meta: { menuName: '项目', showTop: true, index: 1 }
  },
  {
    path: '/projectDetail',
    name: 'ProjectDetail',
    component: projectDetail,
    meta: { parentName: '项目', menuName: '项目详情', showTop: false, index: 1 }
  },
  {
    path: '/technology',
    name: 'Technology',
    component: technology,
    meta: { menuName: '技术', showTop: true, index: 2 }
  },
  {
    path: '/about',
    name: 'About',
    component: about,
    meta: { menuName: '简介', showTop: true, index: 3 }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = createRouter({
  // history: createWebHistory('/personal/'),
  history: createWebHashHistory('/personal/'),
  routes
})

export default router
