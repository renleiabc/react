/*
 * @Author: renlei
 * @Date: 2020-05-21 14:06:04
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-24 22:51:08
 * @Description:鉴权路由的组件
 */
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
class FrontendAuth extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    const { routerConfig, location } = this.props;
    ///console.log(this.props);
    const { pathname, name } = location;
    // console.log(location);
    const isLogin = sessionStorage.getItem("username");
    let targetRouterConfig = routerConfig[0];
    for (let i = 0; i < routerConfig.length; i++) {
      if (routerConfig[i].path === pathname) {
        targetRouterConfig = routerConfig[i];
      } else if (routerConfig[i].name === name) {
        targetRouterConfig = routerConfig[i];
      }
    }
    /*  const targetRouterConfig = routerConfig.find((item) => {
      console.log(item.path);
      return item.path === pathname || item.name === name;
    }); */
    // console.log(targetRouterConfig);
    // 判断路由存在，但不需要鉴权，也不需要登录就可以访问的界面
    if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
      const { component } = targetRouterConfig;
      return (
        <Route
          exact
          path={pathname}
          name={targetRouterConfig.name}
          component={component}
          className="active"
        />
      );
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
            <Route
              path={pathname}
              name={targetRouterConfig.name}
              component={targetRouterConfig.component}
              className="active"
            />
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
