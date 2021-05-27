/*
 * @Descripttion:
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-01 14:43:56
 * @LastEditors: xutao
 * @LastEditTime: 2021-05-26 17:17:23
 */
import Vue from 'vue'
import vuex from 'vuex'

import app from './modules/app.js'
import addRoutes from './modules/addRoutes'
import codeTable from './modules/codeTable'
import createPersistedState from 'vuex-persistedstate'
Vue.use(vuex)
const store = new vuex.Store({
  modules: {
    app: app,
    addRoutes: addRoutes,
    codeTable: codeTable,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      //加入要持久化的vuex模块
      reducer(val) {
        return {
          app: val.app,
          codeTable: val.codeTable,
        }
      },
    }),
  ],
})
export default store
