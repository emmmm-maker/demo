<template>
    <view>
        <button :class="styles.btn" type="primary" @getAuthorize="onGetAuthorize" @error="handleAuthError"
            scope="phoneNumber" open-type="getAuthorize">
            立即开通
        </button>
    </view>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro';
import styles from './index.module.scss'
import { getUserInfo } from '@/api/login'
const onGetAuthorize = () => {
    my.getPhoneNumber({
        success: (res) => {
            let encryptedData = res.response
            console.log('encryptedData', encryptedData)
            my.getAuthCode({
                scopes: ['auth_base'],
                success: async (res) => {
                    Taro.setStorageSync(
                        'authCode',
                        JSON.stringify(res.authCode)
                    )
                    const requestData = {
                        code: res.authCode,
                        response: encryptedData,
                    }
                    console.log('哈哈哈哈哈哈好')
                    const data = await getUserInfo(requestData)
                    console.log('================', data);
                },
                fail: (res) => {
                    console.log(res)
                    console.log('hahahha')
                }
            })
        }
    })
}
</script>

<style scoped></style>