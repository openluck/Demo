/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-28 17:10:10
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-28 17:15:30
 */
import Vue from 'vue';
import Vuex from 'vuex';
import footerStatus from './modules/footerStatus'
import collection from './modules/collection'
Vue.use(Vuex);

// 这样一改就有了关于两个模块的state管理文件了 
// footerStatus.js和collection.js，现在你要运行当前的代码话，
// 项目会报错！因为我们把上面的代码模块化分开了，引用的地方还没有改。
// 接下来咱们一起来看看 mapState, mapGetters, mapActions的使用，


export default new Vuex.Store({
  modules: {
    footerStatus,
    collection
  }
});

// ...mapState({  //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
//   isShow:state=>state.footerStatus.showFooter //注意这些与上面的区别就是state.footerStatus,
// 里面定义的showFooter是指footerStatus.js里state的showFooter
// }),
// 你也可以用下面的mapGetters来获取isShow的值，貌似下面的更简洁
// ...mapGetters('footerStatus',{ //footerStatus指的是modules文件夹下的footerStatus.js模块
//   isShow:'isShow' //第一个isShow是我自定义的只要对应template里v-if="isShow"就行，
// 第二个isShow是对应的footerStatus.js里的getters里的isShow
// })