import request from '@/utils/request'

/**
 * 获取学校
 */
export const getSchoolName = (schoolMsg: object) => {
    return request.post('/campusPass/getSchoolName', schoolMsg)
}

/***
 * 存入登陆用户信息
 */
export const syncLandUserMsg = (userMsg: object) => {
    return request.post('/campusPass/syncLandUserMsg', userMsg)
}

/**
 * 判断并绑定用户信息 (信息填写页面 若登录用户身份选择学生/家长 使用该接口进行数据存储)
 */
export const checkAndBind = (faceUserMsg: any) => {
    return request.post('/campusPass/checkAndBind', faceUserMsg)
}
/**
 * 绑定刷脸用户信息 (若登录用户身份非 学生/家长 使用该接口进行数据存储)
 * @param faceUserMsg
 * @returns
 */
export const syncFaceUserMsg = (faceUserMsg: any) => {
    return request.post('/campusPass/syncFaceUserMsg', faceUserMsg)
}

/**
 * 获取刷脸用户开通信息
 */
export const getPayOpenMsg = (faceMsg: any) => {
    return request.post('/campusPass/getPayOpenMsg', faceMsg)
}

/**
 * 获取登陆用户信息
 */
export const getLandUserMsg = (data: any) => {
    return request.post(`/campusPass/getLandUserMsg?zfbUserId=${data}`)
}

/***
 * 生成用户信息token
 */
export const getEducateTokenMsg = (data: any) => {
    return request.post('/campusPass/getEducateTokenMsg', data)
}
