/*
 * @Author: renlei
 * @Date: 2020-05-18 11:35:57
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-20 16:30:30
 * @Description:入口文件
 */

import React from "react";
import ReactDOM from "react-dom";
import "@/assets/less/index.less";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
