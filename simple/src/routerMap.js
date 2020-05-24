/*
 * @Author: renlei
 * @Date: 2020-05-21 14:00:42
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-24 18:50:58
 * @Description:路由的地址
 */
import Home from "@/page/home";
import Post from "@/page/postEditor";
import Error from "@/page/error";
import Login from "@/page/login";
import PostDetails from "@/page/postDetails";
export default [
  { path: "/", name: "App", component: Home, auth: true },
  { path: "/post", name: "Post", component: Post, auth: true },
  {
    path: "/postDetails",
    name: "PostDetails",
    component: PostDetails,
    auth: true,
  },
  { path: "/login", name: "Login", component: Login },
  { path: "/404", name: "404", component: Error },
];
