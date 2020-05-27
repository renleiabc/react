/*
 * @Author: renlei
 * @Date: 2020-05-27 17:13:09
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-27 18:44:06
 * @Description:登录界面
 */
/*
 * @Author: renlei
 * @Date: 2020-05-27 14:20:28
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-27 15:55:30
 * @Description:
 */

import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import IconFont from "../../components/IconFont";
import styles from "./index.module.less";

class Login extends Component {
  render() {
    const { location } = this.props;
    var username = localStorage.getItem("ms_username");
    console.log(location);
    /* 等以后就不必重复登录了 */
    if (username) {
      if (location.pathname === "/login") {
        return <Redirect to="/main/dashboard" />;
      }
    }
    return (
      <div className={styles.loginWrap}>
        <div className={styles.msLogin}>
          <div className={styles.msTitle}>后台管理系统</div>
          <Form className={styles.msContent}>
            <Form.Item rules={[{ required: true, message: "请输入用户名" }]}>
              <Input />
            </Form.Item>
            <Form.Item rules={[{ required: true, message: "请输入密码" }]}>
              <Input
                type="password"
                addonBefore={<IconFont type="anticon-lx-lock" />}
              />
            </Form.Item>
            <div className={styles.loginBtn}>
              <Button type="primary" onClick={this.onSubmit.bind(this)}>
                登录
              </Button>
            </div>
            <p className={styles.loginTips}>Tips : 用户名和密码随便填。</p>
          </Form>
        </div>
      </div>
    );
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem("ms_username", values.username);
        this.props.history.push("/main/dashboard");
      } else {
        message.error("登录失败!");
        return false;
      }
    });
  }
}

export default withRouter(Login);
