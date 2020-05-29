/*
 * @Author: renlei
 * @Date: 2020-05-27 17:32:50
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-29 21:16:02
 * @Description: 主体界面
 */
import React, { Component } from "react";
import { Layout } from "antd";
import HeaderPart from "../../components/Header/index";
import "./index.less";
const { Header, Sider, Content } = Layout;
class Main extends Component {
  state = {
    collapsed: false,
  };
  render() {
    return (
      <div className="main">
        <Layout className="mainContent">
          <Sider>
            {/* 侧边导航栏 */}
            <HeaderPart />
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content className="mainRight">Content</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Main;
