/*
 * @Author: renlei
 * @Date: 2020-05-25 16:34:18
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-27 18:30:44
 * @Description:
 */

import React from "react";
import ReactDOM from "react-dom";
import "./assets/less/index.less";
import { AppRoutes } from "./router";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<AppRoutes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
