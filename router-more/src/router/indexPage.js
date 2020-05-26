/*
 * @Author: renlei
 * @Date: 2020-05-26 11:50:58
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-26 14:01:01
 * @Description:
 */
import React, { Component } from "react";
import HomePage from "../page/homePage";
import UserPage from "./userPage";
import {
  HashRouter as Router, //路由会带#号
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
class IndexPage extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/user" component={UserPage}></Route>
        <Redirect exact from="/" to="/home"></Redirect>
        <Redirect to="/404"></Redirect>
      </Switch>
    );
  }
}
export default IndexPage;
