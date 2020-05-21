/*
 * @Author: renlei
 * @Date: 2020-05-21 09:45:10
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-21 14:32:13
 * @Description:
 */

//App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import FrontendAuth from "./FrontendAuth";
import routerMap from "./routerMap";
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          {/*   页面上的路由跳转，都由 FrontendAuth 高阶组件代理了，在 Switch
            组件内部，不再是 Route 组件，而只有一个 FrontendAuth 组件。 */}
          <FrontendAuth routerConfig={routerMap} />
        </Switch>
      </Router>
    );
  }
}

export default App;
