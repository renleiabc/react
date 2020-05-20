/*
 * @Author: renlei
 * @Date: 2020-05-20 16:32:11
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-20 18:23:15
 * @Description:登录页
 */
import React, { Component } from "react";
import { Redirect } from "react-router-dom"; //重定向使用
import axios from "../utils/request";
import { message } from "antd";
import "@/assets/less/login.less";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      rediectToReferrer: false, // 是否重定向之前的界面
    };
  }
  // 处理用户名、密码的变化
  handleChange(e) {
    if (e.target.name === "username") {
      this.setState({
        userName: e.target.value,
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
    const loginIfo = data.data;
    if (loginIfo.status === 200) {
      message.success(loginIfo.message);
      // 保存信息到sessionStorage
      sessionStorage.setItem("userId", loginIfo.id);
      sessionStorage.setItem("username", username);
      // 登录成功后，设置redirectToReferrer为true;
      this.setState({
        rediectToReferrer: true,
      });
    } else {
      message.error("登录失败！");
    }
  }
  render() {
    // from 保存跳转到登录页前的页面路径，用于在登录成功后重定向到原来页面
    const { form } = this.props.location.state || {
      from: { pathname: "/" },
    };
    const { rediectToReferrer } = this.state;
    // 登录成功后，redirectToReferrer为true，使用Redirect组件重定向页面
    if (rediectToReferrer) {
      return <Redirect to={form} />;
    }
    return (
      <form className="login" onSubmit={this.handleSumit}>
        <div>
          <label htmlFor="">
            用户名：
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            密码：
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <input type="submit" value="登录" />
      </form>
    );
  }
}
export default Login;
