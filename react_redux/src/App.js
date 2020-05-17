/*
 * @Author: renlei
 * @Date: 2020-05-17 15:42:00
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-17 18:22:11
 * @Description:
 */

import React, { Component } from "react";
// import * as ActionTypes from "./store/ActionType";
import * as Action from "./store/Action";
import { connect } from "react-redux";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  /* // 增长函数
  handleInCrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  // 减少函数
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  }; */
  /*  onIncrement = () => {
    this.props.dispatch(Action.increment());
  };
  onDecrement = () => {
    this.props.dispatch(Action.decrement());
  }; */
  render() {
    /* store.subscribe(() => {
      console.log(`Store is changed:${store.getState()}`);
      this.setState({
        count: store.getState(),
      });
    }); */
    const { increment, decrement } = this.props;
    return (
      <div className="container">
        <h1 className="text-center mt-5">
          {this.props.text}
          {this.props.count}
        </h1>
        <p className="text-center">
          <button onClick={() => increment()} className="btn btn-primary mr-2">
            Increase
          </button>
          <button onClick={() => decrement()} className="btn btn-danger mr-2">
            Decrease
          </button>
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state.count,
  text: state.hello,
});
export default connect(mapStateToProps, Action)(App);
