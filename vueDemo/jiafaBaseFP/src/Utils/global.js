/*
 * @Desc:
 * @Version: v1.00
 * @Author: wentan
 * @Date: 2021-04-30 17:19:56
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-27 10:05:02
 */
/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 this.Global 调用
 */
// 后台管理系统服务器地址
import '../../public/config'
let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
  //  baseUrl = '/api';
  baseUrl = 'http://10.10.0.232:2002/api'
  // baseUrl = 'http://110.185.174.59:3000/mock/679/'
} else if (process.env.NODE_ENV === 'debug') {
  baseUrl = 'http://10.4.3.241:8080'
} else if (process.env.NODE_ENV === 'production') {
  // baseUrl = 'http://10.10.0.232:2002/api'
  if (window.G.productionUrL) {
    baseUrl = window.G.productionUrL
  } else {
    baseUrl = '/'
  }
}

export { baseUrl }
