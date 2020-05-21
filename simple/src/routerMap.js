/*
 * @Author: renlei
 * @Date: 2020-05-21 14:00:42
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-21 16:39:52
 * @Description:路由的地址
 */
import Home from "@/page/home";
import Post from "@/page/home";
import Error from "@/page/error";
import Login from "@/page/login";
export default [
  { path: "/", name: "App", component: Home, auth: true },
  { path: "/post", name: "Home", component: Post, auth: true },
  { path: "/login", name: "Login", component: Login },
  { path: "/404", name: "404", component: Error },
];
