/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-28 13:55:26
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-28 14:15:27
 */
import { firstName, lastName, year } from './export.js';

function setName() {
  const fullName = firstName + ' ' + lastName;
  console.log(fullName);
  return fullName;
}
setName()