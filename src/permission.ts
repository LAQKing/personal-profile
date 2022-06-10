import router from './router'
import NProgress from 'nprogress' // 导入进度条模块
import 'nprogress/nprogress.css' // 进度条样式

NProgress.configure({ showSpinner: false }) // n前进配置

router.beforeEach(async(to, from, next) => {
  // 启动进度条
  NProgress.start()
  // 设置页面标题
  const title:any = to.meta.menuName
  document.title = title
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('route', JSON.stringify(to.matched[0]))
  })

  next()
})

router.afterEach(() => {
  // 结束进度条
  NProgress.done()
})
