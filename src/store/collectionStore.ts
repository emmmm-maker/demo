import { defineStore } from 'pinia'
import { getPayOpenMsg } from '@/api/collection'
import Taro from '@tarojs/taro'
export const useCollectionStore = defineStore('collection', {
    state: () => {
        return {
            faceUserInfoArr: [],
            currentUserInfo: {},
        }
    },
    actions: {
        async setFaceUserInfoArr(
            reqData: any = {
                identity: JSON.parse(Taro.getStorageSync('loginUserInfo'))
                    .identity,
                page: 1,
                pageSize: 10,
                userId: JSON.parse(Taro.getStorageSync('userId')),
            }
        ) {
            const res = await getPayOpenMsg(reqData)
            this.faceUserInfoArr = res.result
            console.log('faceUserInfoArr', this.faceUserInfoArr)
        },
    },
})
