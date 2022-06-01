import $axios from './request'

// 登录
// export const login = (data) => $axios.post('/api/user/login', data)

// 获取案例
export const getCase = () => $axios.get('/json/getCaseList.json')

// 获取技术
export const getTechnologys = () => $axios.get('/json/getTechnologys.json')

// 个人简介
export const getUserInfo = () => $axios.get('/json/userInfo.json')
