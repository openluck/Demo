<!--
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-27 10:15:33
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-28 16:56:04
-->
<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // this.getStoreState();
    this.actionNewNum();
  },
  methods: {
    getStoreState() {
      console.log(this.$store.getters.getChangedNum);
    },
    actionNewNum() {
      this.$store.dispatch("getNewNum", 1);
      console.log('改变值为1',this.$store.getters.getChangedNum);
      this.$store.dispatch("getNewNum", 2);
      console.log('改变值为2',this.$store.getters.getChangedNum);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
