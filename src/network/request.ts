const axios = require('axios')

const baseURL = 'http://127.0.0.1:7002'

const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

// 添加请求拦截器
instance.interceptors.request.use(function (config: any) {
    // 在发送请求之前做些什么
    return config
}, function (error: any) {
    // 对请求错误做些什么
    return Promise.reject(error);
})


// 添加响应拦截器
instance.interceptors.response.use(function (response: any) {
    // 对响应数据做点什么
    if (response.status === 200) {
        return response.data
    } else {
        throw '请求响应错误'
    }

}, function (error: any) {
    // 对响应错误做点什么
    return Promise.reject(error)
})

export default instance