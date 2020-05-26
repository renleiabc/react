import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  HashRouter as Router, //路由会带#号
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import NoFound from "./404/404";
import IndexPage from "./router/indexPage";
import NewRoute from "./routerDemo/newRoute";
import Login from "./login/login";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Switch>
          <Route path="/404" component={NoFound}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/" component={IndexPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
