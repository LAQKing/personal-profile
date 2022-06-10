import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import router from './router'
import store from './store'
import '@arco-design/web-vue/lib/index.css'
import '@/style/index.css'
import '@/permission' // 路由权限控制
import NProgress from 'nprogress' // 导入进度条模块
NProgress.configure({ showSpinner: false }) // n前进配置
const app = createApp(App)

app.use(store)
app.use(router)
app.use(ArcoVue)
  .use(ArcoIcon)
app.mount('#app')
