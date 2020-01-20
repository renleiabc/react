/*
 * @Author: renlei
 * @Date: 2019-12-23 10:39:53
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-20 10:31:48
 * @Description:
 */
import React, { Component } from "react";
import { Button, Layout } from "antd";
import Modal from "./simple/Portals";
import Hello from "./simple/Hello";
import "./App.css";
const { Header, Footer, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handleOpen = this.handleOpen.bind(this);
  }
  handleOpen() {
    this.setState({ showModal: true });
  }
  // 关闭弹出框
  closeModel = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <Button type="primary" onClick={this.handleOpen}>
              打开
            </Button>
          </Header>
          <Content>
            <Hello></Hello>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
        <Button type="primary">Button</Button>
        {this.state.showModal && (
          <Modal onClose={this.closeModel}>这是一个弹出框</Modal>
        )}
      </div>
    );
  }
}
export default App;
