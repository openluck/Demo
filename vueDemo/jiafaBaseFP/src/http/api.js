/*
 * 接口统一集成模块
 */
import * as init from './modules/init'
//权限设置
import * as permissionSetting from './modules/permissionSetting/permissionSetting'
import * as ArrangeOperation from './modules/arrangeOperation/ArrangeOperation'

// 默认全部导出
export default {
  init,
  permissionSetting,
  ArrangeOperation,
}
