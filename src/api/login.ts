import request from '@/utils/request'

/**
 * 获取支付宝用户信息
 */

export const getUserInfo = (codeMsg: any) => {
    return request.post('/campusPass/getUserLandInfo', codeMsg)
}

/**
 * 判断用户是否首次登录
 */
export const isFirstTimeLogin = (codeMsg: any) => {
    return request.post('/campusPass/checkFirstLand', codeMsg)
}
