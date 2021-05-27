<!--
 * @Descripttion: 
 * @version: v1.0
 * @Author: xutao
 * @Date: 2021-05-26 14:39:43
 * @LastEditors: xutao
 * @LastEditTime: 2021-05-27 09:24:55
-->
<template>
  <div class="arrange-operation">
    <div class="left">
      <!-- 行政班 -->
      <a-card
        title="行政班级"
        :bodyStyle="{
          height: '500px',
          padding: '8px 0',
          fontSize: '12px',
          textAlign: 'center',
        }"
      >
        <!-- 年级 -->
        <a-menu tabPosition="left" :default-selected-keys="classId">
          <a-menu-item
            v-for="item of classList"
            :key="item.classId"
            mode="inline"
          >
            <span
              >{{ item.className }}(课程:{{ item.lessonNum }} 教师:{{
                item.teacherNum
              }}) 冲突数量:{{ item.conflictNum }}</span
            >
          </a-menu-item>
        </a-menu>
      </a-card>
    </div>
    <div class="center">
      <div class="rules">
        <div class="rule-item">排课规则</div>
        <div class="rule-item">教室安排</div>
        <div class="rule-item">教师任教</div>
        <div class="rule-item">课程安排</div>
      </div>
      <div class="table">123</div>
    </div>
    <div class="right">right</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      msg: 'ArrangeOperation',
      classList: [], //班级List
      classId: [], //选中的班级Id
    }
  },
  computed() {},
  mounted() {
    this.getAdminClassList()
  },
  methods: {
    async getAdminClassList() {
      let res = await this.$api.ArrangeOperation.getAdminClassList()
      if (res.code === '200' || res.code === 200) {
        this.classList = res.data
        this.classId[0] = res.data[0].classId
      }
    },
  },
}
</script>

<style lang="less" scoped>
.arrange-operation {
  width: 100%;
  height: 98%;
  padding: 16px 16px 20px 16px;
  margin-top: 16px;
  background-color: #ffffff;
  display: flex;
  .left {
    flex: 0.2;
    // background-color: rgb(89, 207, 207);
  }
  .center {
    flex: 1;
    background-color: rgb(240, 242, 245);
    margin: 0 16px;
    .rules {
      width: 100%;
      height: 30px;
      line-height: 30px;
      display: flex;
      flex-direction: row-reverse;
      .rule-item {
        // width: 70px;
        height: 30px;
        line-height: 30px;
        margin-right: 16px;
      }
    }
    .table {
      height: 60%;
      background-color: #ffffff;
      margin: 8px;
    }
  }
  .right {
    flex: 0.4;
    background-color: rgb(89, 207, 207);
  }
}
</style>
