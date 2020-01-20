/*
 * @Author: renlei
 * @Date: 2019-12-23 10:39:53
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-18 11:16:12
 * @Description: index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import "./less/index.less";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
