/*
 * @Author: renlei
 * @Date: 2020-05-17 09:07:29
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-17 09:16:31
 * @Description:存放一个页面的数据
 */
import { observable } from "mobx";
class OneStore {
  @observable oneNum = 3333;
}
export default OneStore;
