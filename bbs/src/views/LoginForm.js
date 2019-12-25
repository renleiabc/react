/*
 * @Author: renlei
 * @Date: 2019-12-25 16:12:10
 * @LastEditors  : renlei
 * @LastEditTime : 2019-12-25 17:09:02
 * @Description: 登录表单
 */
import React, { Component } from 'react';
import { Input,Button } from 'antd';
class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.state = { name: "", password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // 监听用户名和密码两个input值的变化
  handleChange(event) {
    const target = event.target;
    console.log(target);
    this.setState({ [target.name]: target.value });
  }
  // 表单提交的响应函数
  handleSubmit(event) {
    console.log('login successfully');
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <form>
      <label>
        用户名:
            {/*通过value设置input显示内容，通过onChange监听value的变化 */}
          <Input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          密码：
          <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <Button type="primary" onClick={this.handleSubmit}>登录</Button>
    </form>)
  }
}

export default LoginForm;