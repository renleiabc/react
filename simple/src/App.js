/*
 * @Author: renlei
 * @Date: 2020-05-18 11:35:57
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-24 23:15:48
 * @Description:
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* import FrontendAuth from "./frontendAuth";
import routerMap from "./routerMap"; */
import Home from "@/page/home";
// import Error from "@/page/error";
import Login from "@/page/login";
import PostDetails from "@/page/postDetails";
class App extends Component {
  render() {
    return (
      <Router>
        {/*   <Switch>
         页面上的路由跳转，都由 FrontendAuth 高阶组件代理了，在 Switch
            组件内部，不再是 Route 组件，而只有一个 FrontendAuth 组件。
          <FrontendAuth routerConfig={routerMap} />
        </Switch> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/postDetails" component={Home} />
        </Switch>
      </Router>
    );
  }
}
export default App;
