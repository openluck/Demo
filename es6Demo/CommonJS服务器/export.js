/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-28 11:14:22
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-28 11:18:42
 */

// 模块导入导出各种类型的变量，如字符串，数值，函数，类。
// 导出的函数声明与类声明必须要有名称（export default 命令另外考虑）。 
// 不仅能导出声明还能导出引用（例如函数）。
// export 命令可以出现在模块的任何位置，但必需处于模块顶层。
// import 命令会提升到整个模块的头部，首先执行。

let myName = "Tom";
let myAge = 20;
let myfn = function () {
  return "My name is" + myName + "! I'm '" + myAge + "years old."
}
let myClass = class myClass {
  static a = "yeah!";
}
export { myName, myAge, myfn, myClass }
