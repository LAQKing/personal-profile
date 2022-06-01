import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home/index.vue'),
    meta: {
      keepAlive: true, // 需要被缓存
    },
  },
  {
    path: "/case",
    name: "Case",
    component: () => import('../views/Case/index.vue'),
  },
  {
    path: "/caseDetail/:id",
    name: "CaseDetail",
    component: () => import('../views/CaseDetail/index.vue'),
  },
  {
    path: "/technology",
    name: "Technology",
    component: () => import('../views/Technology/index.vue'),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/About/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
