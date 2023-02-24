import { getEducateTokenMsg } from '@/api/collection'
export const getFaceToken = async (data: any) => {
    try {
        const userTokenReq = {
            parentPhone: data.zfbPhone,
            schoolStdCode: data.schoolId,
            studentName: data.faceName,
            subCode: 'SCHOOL_FACE_PASS_NAVIGATE',
            certNo: data.papersId,
            certType: data.papersType === 'idCard' ? '1' : 'A',
            operatorUserId: data.landZfbUserId,
            outUserId: data.outUserId,
        }
        const userTokenRes = await getEducateTokenMsg(userTokenReq)
        console.log('userTokenRes', userTokenRes)
        return userTokenRes.token
    } catch (error) {
        return Promise.reject(error)
    }
}
