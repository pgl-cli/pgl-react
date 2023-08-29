import axios from 'axios';
import { isFunction } from '@/utils'

import qs from 'qs';



// 声明一个map，存储每个请求的表示标识 和 取消函数
let pendingMap = new Map();

// * 序列化参数
export const getPendingUrl = (config) =>
    [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join("&");

export class AxiosCancelers {

    /**
     * 添加请求
     */
    addPending(config) {
        // * 在请求开始前，对之前的请求做检查取消操作
        this.removePending(config);
        const url = getPendingUrl(config);
        config.cancelToken =
            config.cancelToken ||
            new axios.CancelToken(cancel => {
                if (!pendingMap.has(url)) {
                    // 如果 pending 中不存在当前请求，则添加进去
                    pendingMap.set(url, cancel);
                }
            });
    }

    /**
     * 移除请求
     */
    removePending(config) {
        const url = getPendingUrl(config);

        if (pendingMap.has(url)) {
            // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
            const cancel = pendingMap.get(url);
            cancel && cancel();
            pendingMap.delete(url);
        }
    }

    /**
     * 移除全部请求
     */
    removeAllPending() {
        pendingMap.forEach(cancel => {
            cancel && isFunction(cancel) && cancel();
        });
        pendingMap.clear();
    }

    /**
     * 重置
     */
    reset() {
        pendingMap = new Map();
    }
}