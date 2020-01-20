/*
 * @Author: renlei
 * @Date: 2020-01-16 18:09:44
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-18 11:32:40
 * @Description:
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../less/simple/Portals.less";
class Modal extends Component {
  constructor(props) {
    super(props);
    // 根节点下创建一个div节点
    this.container = document.createElement("div");
    document.body.appendChild(this.container);
  }
  // 卸载阶段，组件从DOM中被卸载的过程，这个过程只有一个生命周期的方法；
  componentWillUnmout() {
    document.body.removeChild(this.container);
  }
  render() {
    console.log(this.props);
    // 创建的DOM树挂载到this.container指向的div节点下面
    return ReactDOM.createPortal(
      <div className="modal">
        <span className="close" onClick={this.props.onClose}>
          关闭
        </span>
        <div className="content">
          <div>{this.props.children}</div>
          <div custom-attribute="something">这是一个自定义的DOM属性</div>
        </div>
      </div>,
      this.container
    );
  }
}
export default Modal;
