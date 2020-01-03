/*
 * @Author: renlei
 * @Date: 2019-12-26 17:56:43
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-03 11:48:29
 * @Description:复选框和单选框
 */
import React, { Component } from 'react'

class CheckBox extends Component {
  constructor(props) {
    super(props)
    this.state = { react: false, redux: false, mobx: false }
    this.handleChange = this.handleChange.bind(this)
    this.handleSumit = this.handleSumit.bind(this)
  }
  // 监听复选框的变化，设置复选框的checked状态
  handleChange(event) {
    console.log(event.target.name, event.target.checked)
    this.setState({ [event.target.name]: event.target.checked })
    
  }
  // 表单提交的响应函数
  handleSumit(event) {
    console.log(this.state)
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSumit}>
        {/* 设置3个复选框*/}
        <label>
          React
          <input
            type="checkbox"
            name="react"
            value="react"
            checked={this.state.react}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Redux
          <input
            type="checkbox"
            name="redux"
            value="redux"
            checked={this.state.redux}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Mobx
          <input
            type="checkbox"
            name="modx"
            value="modx"
            checked={this.state.modx}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default CheckBox
