


import axios from 'axios';
import { AxiosCancelers } from './axiosCancel'


const config = {
    baseURL: '',
    timeout: 10000,
    withCredentials: true, // 跨域凭证携带
}


const axiosCancel = new AxiosCancelers()

class RequestHttp {
    constructor(config) {
        this.instance = axios.create(config);
        /**
         * 请求拦截
         */
        this.instance.interceptors.request.use(config => {
            axiosCancel.addPending(config);
            // 需要添加token自行设置
            const token = '';

            return { ...config, headers: { "token": token } }
        })

        /** 
         * 响应拦截
        */
        this.instance.interceptors.response.use(response => {
            /**
             * 自行配置响应请求拦截
             */
            const { data, config } = response;
            // 在请求结束后，移除本次请求
            axiosCancel.removePending(config)


            return data;
        }, err => {
            return Promise.reject(err)
        })

    }

    get = (url, params, headers) => {
        return this.instance.request({ url, params, headers, method: 'GET' })
    }

    post = (url, params, headers) => {
        return this.instance.request({ url, params, headers, method: 'POST' })
    }

    delete = (url, params, headers) => {
        return this.instance.request({ url, params, headers, method: 'DELETE' })
    }

    patch = (url, params, headers) => {
        return this.instance.request({ url, params, headers, method: 'PATCH' })
    }
}


export default new RequestHttp(config);