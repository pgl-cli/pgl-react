


import axios from 'axios';

const request = axios.create({
    baseURL: '',
    timeout: 10000,
})



/**
 * 请求拦截
 * 可个性化配置
 */
request.interceptors.request.use(requestConfig => {
    const token = localStorage.getItem('token')

    if (token) {
        requestConfig.headers['token'] = token
    }

    return requestConfig;
}, err => Promise.reject(err));


/**
 * 响应拦截
 * 可个性化配置
 */
request.interceptors.response.use(response => {
    return response.data;
}, err => {

    /**
     * 可根据接口返回状态配置不同响应
     */

    return Promise.reject(err);
})


export default request;