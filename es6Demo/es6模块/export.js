/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-28 13:53:28
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-28 13:54:46
 */
// 第一种导出方式
// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var year = 1958;
// export function multiply(x, y) {
//   return x * y;
// };

// 第二种
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
function multiply(x, y) {
  return x * y;
};

export { firstName, lastName, year, multiply };