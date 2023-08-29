


import request from '@/utils/request';



export const getList = () => {
    return request.post('http://www.baidu.com', {a: 1})
}