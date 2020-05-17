/*
 * @Author: renlei
 * @Date: 2020-05-16 16:48:12
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-17 10:32:31
 * @Description:入口文件
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router/router";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import stores from "./store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider {...stores}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
// 5.x版本的严格模式开启方式
configure({
  enforceActions: "observed",
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
