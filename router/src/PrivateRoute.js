/*
 * @Author: renlei
 * @Date: 2020-05-25 13:54:25
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-26 18:15:26
 * @Description:
 */
import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
//withRouter用于向下传递props
// import { observer, inject } from "mobx-react";
import NoPermissions from "./pages/404"; //引入权限不足组件
// @inject("userStore") //调用判断用户是否登录的方法
// @observer
class PrivateRoute extends React.Component {
  routerFun = (list) => {
    const isLogin = sessionStorage.username;
    console.log(isLogin);
    const permissions = "admin";
    const { pathname, name } = this.props.location;

    return list.map((route) => {
      if (route.meta && route.meta.require) {
        //第一步，验证是否需要登录就可进入
        if (isLogin) {
          //判断是否登录
          // const permissions = this.props.userStore.userMessage.permissions; //获取登录用户的权限
          const role = route.role; //获取路由文件中的权限
          console.log(role.includes(permissions));
          // 如果是登陆状态，访问登陆界面的时候，重定向到主页
          if (pathname === "/login") {
            console.log(pathname);
            return <Redirect to="/main" key={pathname} />;
          } else if (role.includes(permissions)) {
            //比较权限
            if (route.children) {
              console.log(route.children);
              //路由是否存在子路由
              return (
                <Route
                  key={route.name}
                  path={route.path}
                  component={route.component}
                  render={() => {
                    /* <route.component key={route.name} {...this.props}>
                      {this.routerFun(route.children)}
                      <Route
                        key={route.name}
                        exact
                        path={route.path}
                        render={() => <Redirect to={route.redirect} />}
                      />
                    </route.component> */
                    route.children.map((routes) => {
                      console.log(routes);
                      return (
                        <Route
                          path={routes.path}
                          key={routes.name}
                          component={routes.component}
                        ></Route>
                      );
                    });
                  }}
                />
              );
            } else {
              //渲染路由
              return (
                <Route
                  key={route.name}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            }
          } else {
            //权限不足
            return (
              <Route
                key={route.name}
                exact
                path={route.path}
                component={NoPermissions}
              />
            );
          }
        } else {
          //没有登录
          return <Redirect key={route.name} to="/login" />;
        }
      } else if (route.redirect) {
        //第二步，判断该路由是否需要重定向
        return (
          <Route
            key={route.name}
            exact
            path={route.path}
            render={() => <Redirect to={route.redirect} />}
          />
        );
      } else {
        //不需要登录
        return (
          <Route
            key={route.name}
            path={route.path}
            exact
            component={route.component}
          />
        );
      }
    });
  };
  render() {
    let { routerList } = this.props;
    return <Switch>{this.routerFun(routerList)}</Switch>;
  }
}

export default withRouter(PrivateRoute);
