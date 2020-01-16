/*
 * @Author: renlei
 * @Date: 2020-01-16 18:09:44
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-16 18:28:26
 * @Description:
 */
import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    // 根节点下创建一个div节点
    this.container = document.createElement("div");
    document.body.appendChild(this.container);
  }
  componentWillUnmout() {
    document.body.removeChild(this.container);
  }
  render() {
    // 创建的DOM树挂载到this.container指向的div节点下面
    return ReactDOM.createPortal(<div></div>);
  }
}
export default Modal;
