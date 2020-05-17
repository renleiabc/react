import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../page/home";
import One from "../page/one";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route exact path={`/`} component={Home}></Route>
          <Route path={`/one`} component={One}></Route>
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default Router;
