/*
 * @Author: renlei
 * @Date: 2020-05-26 11:06:46
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-26 15:59:29
 * @Description:
 */

import React, { Component } from "react";

import {
  HashRouter as Router, //路由会带#号
  Route,
  NavLink,
} from "react-router-dom";
import A from "../page/a";
export default class NewRoute extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route
            path="/"
            render={() => {
              return (
                <div>
                  <p>这行显示的是"/"的组件</p>
                  <Route
                    path="/a"
                    render={() => {
                      return (
                        <div>
                          <p>这样显示的是"/a"的组件</p>
                          <Route path="/a/b" component={A}></Route>
                        </div>
                      );
                    }}
                  ></Route>
                  <Route
                    path="/c"
                    render={() => {
                      return (
                        <div>
                          <p>这样显示的是"/c"的组件</p>
                          <Route
                            path="/c/b"
                            render={() => {
                              return <p>这行显示的是"/c/b"的组件</p>;
                            }}
                          ></Route>
                        </div>
                      );
                    }}
                  ></Route>
                </div>
              );
            }}
          ></Route>
        </Router>
      </div>
    );
  }
}
