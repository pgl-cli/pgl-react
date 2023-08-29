


import axios from 'axios';

const instance = axios.create({
    baseURL: '',
    timeout: 10000,
})

/**
 * 请求拦截
 * 可个性化配置
 */
instance.interceptors.request.use(requestConfig => {
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
instance.interceptors.response.use(response => {
    return response.data;
}, err => {

    /**
     * 可根据接口返回状态配置不同响应
     */

    return Promise.reject(err);
})



// 统一接口处理
export const get = (url, params, headers) => {
    return instance.request({url, params, headers, method: 'GET'})
}

export const post = (url, params, headers) => {
    return instance.request({url, params, headers, method: 'POST'})
}

export const del = (url, params, headers) => {
    return instance.request({url, params, headers, method: 'DELETE'})
}

export const patch = (url, params, headers) => {
    return instance.request({url, params, headers, method: 'PATCH'})
}


export default instance;