/*
 * @Author: renlei
 * @Date: 2020-05-17 18:09:24
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-17 21:16:52
 * @Description:
 */
// 获取IP
import http from "../axios/http";
async function getMyIP() {
  let baseUrl = "/project-space/project-list";
  let params = {
    number: "1012002",
  };
  var data = await http.get(baseUrl, params);
  return data;
}
export default (state = "hello", action) => {
  //getMyIP();
  switch (action.type) {
    default:
      return state;
  }
};
