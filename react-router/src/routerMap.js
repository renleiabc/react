/*
 * @Author: renlei
 * @Date: 2020-05-21 10:02:23
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-21 13:37:13
 * @Description:路由地址
 */

import Index from "./page/index";
import Home from "./page/home";
import ErrorPage from "./page/error";
import Login from "./page/login";
export default [
  { path: "/", name: "App", component: Index, auth: true },
  { path: "/home", name: "Home", component: Home, auth: true },
  { path: "/login", name: "Login", component: Login },
  { path: "/404", name: "404", component: ErrorPage },
];
