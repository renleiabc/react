/*
 * @Author: renlei
 * @Date: 2020-05-20 16:32:11
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-21 16:36:09
 * @Description:登录页
 */
import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
//重定向使用
import axios from "../utils/request";
import { message } from "antd";
import "@/assets/less/login.less";
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      rediectToReferrer: false, // 是否重定向之前的界面
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumit = this.handleSumit.bind(this);
  }
  // 处理用户名、密码的变化
  handleChange(e) {
    console.log(e.target.name);
    if (e.target.name === "username") {
      this.setState({
        username: e.target.value,
      });
    } else if (e.target.name === "password") {
      this.setState({
        password: e.target.value,
      });
    }
  }
  // 提交登录表单
  async handleSumit(e) {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    if (username.length === 0 || password.length === 0) {
      message.warning("用户名或密码不能为空！");
      return;
    }
    const params = {
      username,
      password,
    };
    /*  上面已经说明了 async 会将其后的函数（函数表达式或 Lambda）的返回值封装成一个 Promise 对象，而 await 会等待这个 Promise 完成，并将其 resolve 的结果返回出来。 */
    const data = await axios.post("/login", params);
    console.log(JSON.stringify(data));
    const loginIfo = data.data;
    if (data.code === 200) {
      message.success(loginIfo.message);
      // 保存信息到sessionStorage
      sessionStorage.setItem("userId", loginIfo.id);
      sessionStorage.setItem("username", username);
      // 登录成功后，设置redirectToReferrer为true;
      this.setState({
        rediectToReferrer: true,
      });
      let RedirectUrl = this.props.location.state
        ? this.props.location.state.from.pathname
        : "/";
      // 登陆成功之后的跳转
      this.props.history.push(RedirectUrl);
    } else {
      message.error("登录失败！");
    }
  }
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <div className="login">
        <Form
          className="login-form"
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名!",
              },
            ]}
          >
            <Input
              name="username"
              placeholder="请输入用户名"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input.Password
              name="password"
              placeholder="请输入密码"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" onClick={this.handleSumit}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Login;
