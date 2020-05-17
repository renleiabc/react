/*
 * @Author: renlei
 * @Date: 2020-05-17 20:26:24
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-17 21:00:07
 * @Description:
 */

import axios from "axios";

const Axios = axios.create({
  baseURL: "http://rap2.taobao.org:38080/app/mock/21549",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
// 请求前拦截
Axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log("请求超时");
    return Promise.reject(err);
  }
);

// 返回后拦截
Axios.interceptors.response.use(
  (data) => {
    return data;
  },
  (err) => {
    if (err.response.status === 504 || err.response.status === 404) {
      console.log("服务器被吃了⊙﹏⊙∥");
    } else if (err.response.status === 401) {
      console.log("登录信息失效⊙﹏⊙∥");
    } else if (err.response.status === 500) {
      console.log("服务器开小差了⊙﹏⊙∥");
    }
    return Promise.reject(err);
  }
);

const http = {
  /** get 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  get: function (url, params) {
    params = params || {};
    return new Promise((resolve, reject) => {
      Axios.get(url, {
        params: params,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  /** post 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  post: function (url, params) {
    params = params || {};
    return new Promise((resolve, reject) => {
      Axios.post(url, params)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default http;
