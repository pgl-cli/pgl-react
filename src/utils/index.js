




/**
 * 是否是函数
 * @param {*} val 
 * @returns 
 */
export const isFunction = (val) => {
    return toString.call(val) === '[object Function]';
}
