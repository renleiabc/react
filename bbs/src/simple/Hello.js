/*
 * @Author: renlei
 * @Date: 2020-01-18 14:39:21
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-18 16:31:02
 * @Description:组件state
 */
import React, { Component } from "react";
class Hello extends Component {
  constructor(props) {
    super(props);
    // 普通属性
    this.timer = null;
    this.state = {
      date: new Date()
    };
    this.updateDate = this.updateDate.bind(this);
  }
  updateDate() {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() {
    this.timer = setInterval(this.updateDate, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>{this.state.date.toString()}</div>;
  }
}
export default Hello;
