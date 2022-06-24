import $axios from './request'

// 登录
// export const login = (data) => $axios.post('/api/user/login', data)

// 获取案例
export const getProject = () => $axios.get('/json/getProjectList.json')

// 获取技术
export const getBlog = () => $axios.get('/json/getBlog.json')

// 个人简介
export const getUserInfo = () => $axios.get('/json/userInfo.json')
