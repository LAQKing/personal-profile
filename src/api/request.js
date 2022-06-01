import axios from 'axios'

const $axios = axios.create({
  baseURL: './', // 开发环境
  timeout: 60000
})
// 请求拦截器
$axios.interceptors.request.use(config => {
  config.headers.Authorization = 'token'
  return config
}, err => {
  return Promise.reject(err)
})
// 响应拦截器
$axios.interceptors.response.use(res => {
  // 处理响应数据

  return res
}, err => {
  // 处理响应错误
  console.log('请求超时')
  return Promise.reject(err)
})

export default $axios
