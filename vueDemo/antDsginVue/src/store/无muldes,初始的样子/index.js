/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-28 14:24:25
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-28 16:25:55
 */
// 在SPA单页面组件的开发中 Vue的vuex和React的Redux 
// 都统称为同一状态管理，个人的理解是全局状态管理更合适；
// 简单的理解就是你在state中定义了一个数据之后，
// 你可以在所在项目中的任何一个组件里进行获取、进行修改，
// 并且你的修改可以得到全局的响应变更。

// 1:第一步安装 npm install vuex --save
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// const store = new Vuex.Store();

// 设置全局访问的state对象
const state = {
  showFooter: true,
  changebleNum: 0 // 初始化属性值
}
// this.$store.state.showFooter 可以获取到state中的值

// 你已经可以用this.$store.state.showFooter或this.$store.state.changebleNum在任何一个组件里面获取showfooter和changebleNum定义的值了，
// 但这不是理想的获取方式；vuex官方API提供了一个getters，和vue计算属性computed一样，来实时监听state值的变化(最新状态) ，
// 并把它也仍进Vuex.Store里面

const getters = {   //实时监听state值的变化(最新状态)
  isShow(state) {  //方法名随意,主要是来承载变化的showFooter的值
    return state.showFooter
  },
  getChangedNum() {  //方法名随意,主要是用来承载变化的changableNum的值
    return state.changebleNum
  }
};

// 光有定义的state的初始值，不改变它不是我们想要的需求，
// 接下来要说的就是mutations了，mutattions也是一个对象，
// 这个对象里面可以放改变state的初始值的方法，
// 具体的用法就是给里面的方法传入参数state或额外的参数,
// 然后利用vue的双向数据驱动进行值的改变，
// 同样的定义好之后也把这个mutations扔进Vuex.Store里面，

const mutations = {  // 都是同步进行的
  show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.showFooter = true;
  },
  hide(state) {  //同上
    state.showFooter = false;
  },
  newNum(state, sum) { //同上，这里面的参数除了state之外还传了需要增加的值sum
    state.changebleNum += sum;
  }
};

// 这时候你完全可以用 this.$store.commit('show') 或 this.$store.commit('hide') 
// 以及 this.$store.commit('newNum',6) 
// 在别的组件里面进行改变showfooter和changebleNum的值了，
// 但这不是理想的改变值的方式；因为在 Vuex 中，mutations里面的方法 都是同步事务，
// 意思就是说：比如这里的一个this.$store.commit('newNum',sum)方法,
// 两个组件里用执行得到的值，每次都是一样的，这样肯定不是理想的需求


// 好在vuex官方API还提供了一个actions，这个actions也是个对象变量，
// 最大的作用就是里面的Action方法 可以包含任意异步操作，
// 这里面的方法是用来异步触发mutations里面的方法，
// actions里面自定义的函数接收一个context参数和要变化的形参，
// context与store实例具有相同的方法和属性，所以它可以执行context.commit(' '),
// 然后也不要忘了把它也扔进Vuex.Store里面：

const actions = {
  hideFooter(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit('hide');
  },
  showFooter(context) {  //同上注释
    context.commit('show');
  },
  getNewNum(context, num) {   //同上注释，num为要变化的形参
    console.log(num);
    context.commit('newNum', num)
  }
};

// 而在外部组件里进行全局执行actions里面方法的时候，你只需要用执行
// this.$store.dispatch('hideFooter')
// 或this.$store.dispatch('showFooter')
// 以及this.$store.dispatch('getNewNum'，6) //6要变化的实参
// 这样就可以全局改变改变showfooter或changebleNum的值了，如下面的组件中, 
// 需求是跳转组件页面后，根据当前所在的路由页面进行隐藏或显示页面底部的tabs选项卡


const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
export default store;