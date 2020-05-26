/*
 * @Author: renlei
 * @Date: 2020-05-26 13:53:36
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-26 17:46:37
 * @Description:用户路由事件
 */
import React, { Component } from "react";
import userOnePage from "../page/userOnePage";
import userTwoPage from "../page/userTwoPage";
import UserPage from "../page/userPage";
import {
  HashRouter as Router, //路由会带#号
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
class IndexPage extends Component {
  render() {
    const { match, location } = this.props;
    console.log(match, location);
    return (
      <div>
        <NavLink to="/user" activeStyle={{ color: "red" }}>
          用户
        </NavLink>
        <NavLink to="/user/one" activeStyle={{ color: "red" }}>
          用户one
        </NavLink>
        <NavLink to="/user/two" activeStyle={{ color: "red" }}>
          用户two
        </NavLink>
        <Switch>
          <Route
            path="/user"
            render={() => {
              return (
                <div>
                  <Route path="/user" component={UserPage}></Route>
                  <Route path="/user/two" component={userTwoPage}></Route>
                  <Route path="/user/one" component={userOnePage}></Route>
                </div>
              );
            }}
          ></Route>
          <Redirect exact from="/user" to="/user/one"></Redirect>
          <Redirect to="/404"></Redirect>
        </Switch>
      </div>
    );
  }
}
export default IndexPage;
