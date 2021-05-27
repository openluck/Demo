<!--
 * @Descripttion: 分班
 * @version: v1.0
 * @Author: xutao
 * @Date: 2021-04-14 09:31:21
 * @LastEditors: xutao
 * @LastEditTime: 2021-05-26 14:42:16
-->

<template>
  <div class="PermissionSetting">
    <a-table
      :columns="permissionColumns"
      :bordered="isBorder"
      :data-source="permissionData"
      :rowKey="(row) => row.roleId"
      :pagination="false"
    >
      <div slot="personList" slot-scope="text, record">
        <span v-for="item in record.personList" :key="item.index">
          {{ item.personName }}，
        </span>
      </div>
      <template slot="operation" slot-scope="text, record">
        <span @click="personSetting(record)">
          <a-icon type="setting" />
          人员设置
        </span>
      </template>
    </a-table>
    <personSettingModal ref="personSettingModal" />
  </div>
</template>

<script>
import personSettingModal from './ChildCom/personSettingModal'
const permissionColumns = [
  {
    title: '角色',
    dataIndex: 'roleName',
    key: 'roleName',
    width: '25%',
  },
  {
    title: '权限',
    dataIndex: 'rolePermission',
    key: 'rolePermission',
    width: '25%',
  },
  {
    title: '人员',
    dataIndex: 'personList',
    key: 'personList',
    width: '35%',
    scopedSlots: { customRender: 'personList' },
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: '15%',
    scopedSlots: { customRender: 'operation' },
  },
]
export default {
  name: '',
  components: { personSettingModal },
  data() {
    return {
      permissionColumns,
      isBorder: true,
      permissionData: [],
    }
  },
  computed: {},
  mounted() {
    this.getPermission()
  },
  methods: {
    personSetting(record) {
      this.$refs.personSettingModal.personName = ''
      this.$refs.personSettingModal.filterTeaName('')
      this.$refs.personSettingModal.getSelectedPersonList(record.roleId)
      this.$refs.personSettingModal.visible = true
    },
    async getPermission() {
      let data = {
        // sysType: 1,
      }
      let res = await this.$api.permissionSetting.getRoleList(data)
      if (res.code === 200 || res.code === '200') {
        this.permissionData = res.data
      }
    },
  },
}
</script>

<style scoped lang="less">
.PermissionSetting {
  width: 100%;
  height: 98%;
  padding: 16px 16px 20px 16px;
  margin-top: 16px;
  background-color: #ffffff;
}
</style>
