/*
 * @Author: renlei
 * @Date: 2019-12-23 10:39:53
 * @LastEditors  : renlei
 * @LastEditTime : 2019-12-23 10:59:06
 * @Description: 
 */
import React, { Component } from 'react';
import { Button,Layout } from  'antd';
import './App.css';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component{
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
        <Button type="primary">Button</Button>
      </div>
    )
  }
}
export default App;
