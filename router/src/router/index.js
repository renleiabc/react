/*
 * @Author: renlei
 * @Date: 2020-05-25 13:53:17
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-25 15:45:15
 * @Description: 路由数据文件
 */

import Login from "../pages/login";
import Main from "../pages/main";
import Home from "../pages/home";
export default [
  {
    path: "/",
    name: "Login",
    redirect: "/login",
    meta: { require: false },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { require: false },
  },
  {
    path: "/main",
    name: "main",
    redirect: "/main/home",
    component: Main,
    meta: { require: true },
    role: ["admin", "user1", "user2"],
    children: [
      {
        path: "/main/home",
        name: "home",
        component: Home,
        meta: { require: true },
        role: ["admin", "user1", "user2"],
      },
    ],
  },
];
