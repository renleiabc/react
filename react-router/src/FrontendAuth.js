/*
 * @Author: renlei
 * @Date: 2020-05-21 11:24:26
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-21 14:22:38
 * @Description:
 */
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
/* FrontendAuth 组件接收一个名为 config 的 Props，这是一份路由表。同时，由于 FrontendAuth 组件放在了 Switch 组件内部，React Router 还自动为 FrontendAuth 注入了 location 属性，当地址栏的路由发生变化时，就会触发 location 属性对象上的 pathname 属性发生变化，从而触发 FrontendAuth 的更新（调用 render 函数）。
FrontendAuth 的 render 函数中，根据 pathname 查找到路由表中的相关配置，如果该配置中指定了无需校验，就直接返回相应的 Route 组件。 */

class FrontendAuth extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    const { routerConfig, location } = this.props;
    const { pathname } = location;
    const isLogin = sessionStorage.getItem("username");
    console.log(pathname, isLogin);
    console.log(location);
    // 如果该路由不用进行权限校验，登录状态下登陆页除外
    // 因为登陆后，无法跳转到登陆页
    // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
    const targetRouterConfig = routerConfig.find(
      (item) => item.path === pathname
    );
    console.log(targetRouterConfig);
    // 判断路由合法，但不需要鉴权，也不需要登录就可以访问的界面
    if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
      const { component } = targetRouterConfig;
      return <Route exact path={pathname} component={component} />;
    }
    //登录状态
    if (isLogin) {
      // 如果是登陆状态，访问登陆界面的时候，重定向到主页
      if (pathname === "/login") {
        return <Redirect to="/" />;
      } else {
        // 如果路由合法，就跳转到相应的路由
        if (targetRouterConfig) {
          return (
            <Route path={pathname} component={targetRouterConfig.component} />
          );
        } else {
          // 如果路由不合法，重定向到 404 页面
          return <Redirect to="/404" />;
        }
      }
      // 未登录状态
    } else {
      // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      if (targetRouterConfig && targetRouterConfig.auth) {
        return <Redirect to="/login" />;
      } else {
        // 非登陆状态下，路由不合法时，重定向至 404
        return <Redirect to="/404" />;
      }
    }
  }
}
export default FrontendAuth;
