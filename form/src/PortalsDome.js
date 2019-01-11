import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class Modal extends Component {
  constructor(props) {
    super(props)
    // 根节点下创建一个div节点
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
  }
  componentWillUnmount() {
    document.body.removeChild(this.container)
  }
  render() {
    // 创建的DOM树挂载到this.container指向的div节点下面
    return ReactDOM.createPortal(
      <div className="modal">
        <span className="close" onClick={this.props.onClose}>
          &times;
        </span>
        <div className="content">{this.props.children}</div>
      </div>,
      this.container
    )
  }
}
class PortalsDome extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: true }
  }
  // 关闭弹框
  closeModal = () => {
    this.setState({ showModal: false })
  }
  // 打开弹框
  openModal = () => {
    this.setState({ showModal: true })
  }
  render() {
    return (
      <div>
        <h2 onClick={this.openModal}>Dashboard</h2>
        {this.state.showModal && (
          <Modal onClose={this.closeModal}>Modal Dialog</Modal>
        )}
      </div>
    )
  }
}
export default PortalsDome
