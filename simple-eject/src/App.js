import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import asyncComponent from "./asyncComponent"
//通过asyncComponent导入组件， 创建代码分片点
const AsyncHome = asyncComponent(() => import("./components/Home"))
const AsyncLogin = asyncComponent(() => import("./components/Login"))


class App extends Component {
  render() {
    return <Router>
        <Switch>
            <Route exact path="/" component={AsyncHome} />
            <Route path="/login" component={AsyncLogin} />
            <Route path="/posts" component={AsyncHome} />
        </Switch>
      </Router>
  }
}

export default App;
