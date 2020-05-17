/*
 * @Author: renlei
 * @Date: 2020-05-17 09:07:39
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-17 09:21:44
 * @Description:将多个store融合到一个对象里面
 */
/* // 这些文件夹创建的意义是什么呢。其实一个xxxStore的话 就是一个数据源的地方。每个类里面可以定义我们需要用到的数据-就和我们react中state一样；index.js的作用呢 就是把所有数据整合到一块去-- 其实也是为了下面一部做铺垫的； */

import HomeStore from "./homeStore";
import OneStore from "./oneStore";
const oneStore = new OneStore();
const homeStore = new HomeStore();
const stores = {
  oneStore,
  homeStore,
};
// 默认导出接口
export default stores;
