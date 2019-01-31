import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { post } from '../utils/request'
import url from '../utils/url'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'jack',
      password: '123456',
      redirectToRferrer: false // 是否重定向到之前的页面
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // 处理用户名、密码的变化
  handleChange(e) {
    if (e.target.name === 'username') {
      this.setState({
        username: e.target.value
      })
    } else if (e.target.name === 'password') {
      this.setState({
        password: e.target.value
      })
    } else {
      console.log('do nothing')
    }
  }
  /// 提交登录表单
  handleSubmit(e) {
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if (username.length === 0 || password.length === 0) {
      alert('用户名或者密码不能为空')
      return
    }
    const params = {
      username,
      password
    }
    post(url.login(), params).then(data => {
      console.log(data.userId)
      if (data.error) {
        alert(data.error.message || 'login failed')
      } else {
        // 保存登录信息到sessionStorage
        sessionStorage.setItem('userId', data.userId)
        sessionStorage.setItem('username', username)
        this.setState({
          redirectToRferrer: true
        })
      }
    })
  }
  render() {
    // from 保存跳转到登录页前的页面路径， 用于在登录成功后重定向到原来的页面
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToRferrer } = this.state
    console.log(redirectToRferrer)
    console.log(this.props.location.state)
    if (redirectToRferrer) {
      return <Redirect to={from} />
    }
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="label-login">
            <span>用户名：</span>
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="label-login">
            <span>密码：</span>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="登录" className="submit-login" />
        </form>
      </div>
    )
  }
}

export default Login
