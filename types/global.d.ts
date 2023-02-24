/// <reference types="@tarojs/taro" />

declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'
declare var my: any // 为了调用支付宝原生不报错

declare namespace NodeJS {
    interface ProcessEnv {
        TARO_ENV:
            | 'weapp'
            | 'swan'
            | 'alipay'
            | 'h5'
            | 'rn'
            | 'tt'
            | 'quickapp'
            | 'qq'
            | 'jd'
    }
}

declare module '@tarojs/components' {
    export * from '@tarojs/components/types/index.vue3'
}
