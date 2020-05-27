/* eslint-disable no-unused-vars */
/*
 * @Author: renlei
 * @Date: 2020-05-25 16:34:18
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-25 22:46:55
 * @Description:
 */

import React from "react";
import "./App.css";
import {
  HashRouter as Router, //哈西路由有#号as是定 义一个新名
  BrowserRouter, //浏览器路由
  Link, //普通跳转
  NavLink, //跳转，可以添加跳转之后的样式
  Route, //路由
  Switch, //开关，匹配唯一跳转
  Redirect, //重定向
  exact, //完全匹配路由
} from "react-router-dom";
import Son1 from "./oneDome/son1";
import Son2 from "./oneDome/son2";
function App() {
  return (
    <div className="App">
      <header className="App-header">我是个React</header>
      <section style={{ border: "5px solid green" }}>
        <Router>
          <NavLink
            to="/son1"
            activeClassName="select"
            activeStyle={{
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            son1
          </NavLink>
          &nbsp; &nbsp; &nbsp;
          <NavLink
            to="/son2"
            activeStyle={{
              fontWeight: "bold",
              color: "#fff",
            }}
            activeClassName="select"
          >
            son2
          </NavLink>
          <div style={{ height: "100px", border: "5px solid red" }}>
            <Route path="/son1" component={Son1} exact></Route>
            <Route path="/son1/son2" component={Son2}></Route>
            <Route path="/son3"></Route>
          </div>
        </Router>
      </section>
    </div>
  );
}

export default App;
