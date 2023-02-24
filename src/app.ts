import { openUser } from './types/userType';
import { createApp } from 'vue'
import './app.scss'
import { createPinia } from 'pinia'
import {syncFaceUserMsg} from '@/api/collection'
import Taro from '@tarojs/taro';
const pinia = createPinia()
const App = createApp({
    async onShow(options) {
        console.log('app onShow', options)
        if (options?.referrerInfo && options?.referrerInfo?.extraData) {
            const extraData = options?.referrerInfo?.extraData
            console.log(extraData.data) // 跳转时传入的data字符串
            console.log(extraData.success) // 认证是否成功，字符串类型'false' / 'true'}
            if (extraData.success) {
                const data2:openUser = JSON.parse(Taro.getStorageSync('bulkCollectionUserInfo'))
                data2.faceCollectStatus = true
                await syncFaceUserMsg(data2)
            }
        }
    },
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(pinia)

export default App
