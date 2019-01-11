import React, { Component } from 'react'
import Select from './Select'
import Check from './Check'
import SimpleForm from './SimpleForm'
import './App.css'
import DomeRender from './DomeRender'
import ErrorBound from './ErrorBound'
import PortalsDome from './PortalsDome'
// 根组件
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', password: '' }
    console.log(this.state)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // 监听用户名和密码两个input值的变
  handleChange(event) {
    const target = event.target
    console.log(target.name)
    this.setState({ [target.name]: target.value })
  }
  //表单提交的响应函数
  handleSubmit(event) {
    console.log('login successfully')
    console.log(this.state)
    event.preventDefault()
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            用户名：
            {/*通过value设置input显示内容，通过onChange监听value的变化*/}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            密码：
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="登录" />
        </form>
        {/**下拉框 */}
        <Select />
        {/**单选框和复选框*/}
        <Check />
        {/**非受控组件*/}
        <SimpleForm />
        <DomeRender />
        <ErrorBound />
        <PortalsDome />
      </div>
    )
  }
}

export default App
