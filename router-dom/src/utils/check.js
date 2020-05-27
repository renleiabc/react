/*
 * @Author: renlei
 * @Date: 2020-05-27 17:27:53
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-27 17:28:27
 * @Description:权限及登录检查
 */
export const request = (url, init) => {
  return fetch(url, init).then((res) => res.json());
};

// 管理员校验，这里简单判断用户名是否为admin，使用时根据实际情况进行修改
export const checkIsAdmin = () => {
  return localStorage.getItem("ms_username") === "admin";
};

// 登录校验，这里简单判断是否有localstorage则表示是否已登录
export const checkAuth = () => {
  return !!localStorage.getItem("ms_username");
};
