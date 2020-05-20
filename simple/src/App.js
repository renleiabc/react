/*
 * @Author: renlei
 * @Date: 2020-05-18 11:35:57
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-20 18:59:51
 * @Description:
 */
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "@/page/Home";
import Login from "@/page/Login";
class App extends Component {
  render() {
    const userId = sessionStorage.userId;
    console.log(userId);
    if (!userId) {
      return (
        <Router>
          <Redirect to={{ pathname: "/login" }} />;
        </Router>
      );
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/posts" component={Home}></Route>
          </Switch>
        </Router>
      );
    }
  }
}
export default App;
