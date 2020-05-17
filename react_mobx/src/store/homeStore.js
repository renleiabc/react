/*
 * @Author: renlei
 * @Date: 2020-05-17 09:07:20
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-17 11:08:41
 * @Description:存放一个页面数据源的类
 */
import { observable, action } from "mobx";
class HomeStore {
  @observable homeNum = 2;
  @action addNum(state) {
    console.log(state);
    this.homeNum += state;
  }
  @action lessNum() {
    this.homeNum -= 1;
  }
}
export default HomeStore;
