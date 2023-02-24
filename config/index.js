import Components from 'unplugin-vue-components/webpack'
const path = require('path')
const NutUIResolver = () => {
    return (name) => {
        if (name.startsWith('Nut')) {
            const partialName = name.slice(3)
            return {
                name: partialName,
                from: '@nutui/nutui-taro',
                sideEffects: `@nutui/nutui-taro/dist/packages/${partialName.toLowerCase()}/style`,
            }
        }
    }
}

const config = {
    projectName: 'school-pass-mini-client',
    date: '2023-1-29',
    designWidth(input) {
        if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
            return 375
        }
        return 750
    },
    deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
        375: 2 / 1,
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: ['@tarojs/plugin-html'],
    defineConstants: {},
    copy: {
        patterns: [],
        options: {},
    },
    framework: 'vue3',
    compiler: {
        type: 'webpack5',
        prebundle: { enable: false },
    },
    cache: {
        enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    sass: {
        // 默认京东 APP 10.0主题 > @import "@nutui/nutui-taro/dist/styles/variables.scss";
        // 京东科技主题 > @import "@nutui/nutui-taro/dist/styles/variables-jdt.scss";
        // 京东B商城主题 > @import "@nutui/nutui-taro/dist/styles/variables-jdb.scss";
        // 京东企业业务主题 > @import "@nutui/nutui-taro/dist/styles/variables-jddkh.scss";
        data: `@import "@nutui/nutui-taro/dist/styles/variables-jdt.scss";`,
    },
    alias: {
        '@/components': path.resolve(__dirname, '..', 'src/components'),
        '@/utils': path.resolve(__dirname, '..', 'src/utils'),
        '@/api': path.resolve(__dirname, '..', 'src/api'),
        '@/store': path.resolve(__dirname, '..', 'src/store'),
        '@/assets': path.resolve(__dirname, '..', 'src/assets'),
        '@/types': path.resolve(__dirname, '..', 'src/types'),
        '@/package': path.resolve(__dirname, '..', 'package.json'),
        '@/project': path.resolve(__dirname, '..', 'project.config.json'),
    },
    mini: {
        webpackChain(chain) {
            chain.plugin('unplugin-vue-components').use(
                Components({
                    resolvers: [NutUIResolver()],
                })
            )
            chain.merge({
                module: {
                    rule: [
                        {
                            test: /.js$/,
                            loader: 'babel-loader',
                        },
                    ],
                },
            })
        },
        postcss: {
            pxtransform: {
                enable: true,
                config: {
                    // selectorBlackList: ['nut-']
                },
            },
            url: {
                enable: true,
                config: {
                    limit: 1024, // 设定转换尺寸上限
                },
            },
            cssModules: {
                enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]',
                },
            },
        },
    },
    h5: {
        webpackChain(chain) {
            chain.plugin('unplugin-vue-components').use(
                Components({
                    resolvers: [NutUIResolver()],
                })
            )
        },
        publicPath: '/',
        staticDirectory: 'static',
        esnextModules: ['nutui-taro', 'icons-vue-taro'],
        postcss: {
            autoprefixer: {
                enable: true,
                config: {},
            },
            cssModules: {
                enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]',
                },
            },
        },
    },
}

module.exports = function (merge) {
    if (process.env.NODE_ENV === 'development') {
        return merge({}, config, require('./dev'))
    }
    return merge({}, config, require('./prod'))
}
