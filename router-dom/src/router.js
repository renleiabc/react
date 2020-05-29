/* eslint-disable no-unused-vars */
/*
 * @Author: renlei
 * @Date: 2020-05-25 16:34:18
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-29 21:15:06
 * @Description:所有路由文件
 */

import React, { lazy, Suspense } from "react";
import { Spin } from "antd";
import {
  BrowserRouter as Router, //本项目使用浏览器路由
  HashRouter, //哈西路由有#号as是定 义一个新名
  Link, //普通跳转
  NavLink, //跳转，可以添加跳转之后的样式
  Route, //路由
  Switch, //开关，匹配唯一跳转
  Redirect, //重定向
} from "react-router-dom";
import { checkIsAdmin, checkAuth } from "./utils/check";
/* //当用户访问一个页面时， 该页面应该只
加载自己使用到的代码。 解决这个问题的方案就是代码分片， 将JS代码
分片打包到多个文件中， 然后在访问页面时按需加载。通过import导入组件， 创建代码分片点 */
const Login = lazy(() => import("./page/Login/index")); //登录界面
const Main = lazy(() => import("./page/Main/index")); //主体界面
const Home = lazy(() => import("./page/Home/index")); // 首页
/* const Icons = lazy(() => import("./pages/Icons/index"));
const Tables = lazy(() => import("./pages/Tables/index"));
const Tabs = lazy(() => import("./pages/Tabs/index"));
const Forms = lazy(() => import("./pages/Forms/index"));
const Upload = lazy(() => import("./pages/Forms/upload"));
const Charts = lazy(() => import("./pages/Charts/index"));
const Permission = lazy(() => import("./pages/Permission/index"));
const Locale = lazy(() => import("./pages/Locale/index"));
const Editor = lazy(() => import("./pages/Editor/index"));
const Markdown = lazy(() => import("./pages/Markdown/index"));
  */
const ErrorRoute = lazy(() => import("./page/Error/index")); // 非法路由提示界面404
/* 一级路由 */
export const AppRoutes = (props) => {
  return (
    <Router>
      <Suspense fallback={<Spin size="large" />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <AuthRoute path="/main" component={Main} />
          <Route path="/error/:code" component={ErrorRoute} />
          <Route component={ErrorRoute} />
        </Switch>
      </Suspense>
    </Router>
  );
};
export const MainRoutes = () => {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <Switch>
        <Redirect exact from="/main" to="/main/home" />
        <Route exact path="/main/home" component={Home} />
        {/*  <Route exact path="/main/icons" component={Icons} />
        <Route exact path="/main/tables" component={Tables} />
        <Route exact path="/main/tabs" component={Tabs} />
        <Route exact path="/main/forms" component={Forms} />
        <Route exact path="/main/upload" component={Upload} />
        <Route exact path="/main/charts" component={Charts} />
        <AdminRoute exact path="/main/permission" component={Permission} />
        <Route exact path="/main/i18n" component={Locale} />
        <Route exact path="/main/editor" component={Editor} />
        <Route exact path="/main/markdown" component={Markdown} /> */}
        <Route component={ErrorRoute} />
      </Switch>
    </Suspense>
  );
};
// 路由管理员权限校验
const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkIsAdmin() ? <Component {...props} /> : <Redirect to="error/403" />
      }
    />
  );
};
// 路由登录鉴权
const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
