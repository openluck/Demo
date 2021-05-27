import axios from '../../axios'

//left - 获取行政班级列表（含基础数据）
export const getAdminClassList = (data) => {
  return axios({
    url: '/ArrLesOperation/getAdminClassList',
    method: 'post',
    data,
  })
}
