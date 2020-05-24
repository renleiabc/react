/*
 * @Author: renlei
 * @Date: 2020-05-21 16:37:44
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-21 18:25:31
 * @Description:页面头部
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "@/assets/less/header.less";
class Header extends Component {
  render() {
    const { username, onLogout } = this.props;
    return (
      <div className="header">
        <div className="nav">
          <span className="left-link">
            <Link to="/">首页</Link>
          </span>
          <span className="user">
            当前用户：{username}&nbsp;<button onClick={onLogout}>注销</button>
          </span>
        </div>
      </div>
    );
  }
}
export default Header;
