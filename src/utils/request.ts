import Fly from 'flyio/dist/npm/ap'
import Taro from '@tarojs/taro'
const fly = new Fly()
//请求超时时间
fly.config.timeout = 5000
// 配置请求基本地址
const environment = process.env.NODE_ENV
console.log('environment',environment);

if (environment === 'development') {
    fly.config.baseURL = 'http://192.168.200.199:8082'
} else if (environment === 'production') {
    fly.config.baseURl = 'https://vms3.zjoyvd.com/api'
}

//添加请求拦截器
fly.interceptors.request.use((request: any) => {
    //给所有请求添加自定义header
    // request.headers['X-Tag'] = 'flyio'
    //打印出请求体
    console.log('request',request)
    //终止请求
    // var err=new Error("xxx")
    // err.request=request
    // return Promise.reject(new Error(""))
    Taro.showLoading({ title: '加载中,请稍后...' })
    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response: any) => {
        Taro.hideLoading()
        // 兼容性
        if (typeof(response.data) === 'string') {
            response.data = JSON.parse(response.data)
        }
        const { data, msg, status } = response.data
        if (status === 'success') {
            //只将请求结果的data字段返回
            return data
        } else {
            Taro.showToast({
                title: msg,
                icon: 'error',
                duration: 2000,
            })
        }
    },
    (error: any) => {
        Taro.hideLoading()
        //发生网络错误后会走到这里
        // 0为网络错误  1为网络超时
        console.log('erroe',error);
        
        if (error.status === 0) {
            Taro.showToast({
                title: '网络错误，请检查网络后重试',
                icon: 'error',
                duration: 2000,
            })
        } else if (error.status === 1) {
            Taro.showToast({
                title: '网络请求超时，请稍后重试',
                icon: 'error',
                duration: 2000,
            })
        }

        return Promise.reject(error)
    }
)

export default fly
