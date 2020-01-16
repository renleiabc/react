/*
 * @Author: renlei
 * @Date: 2020-01-09 14:46:28
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-09 15:04:41
 * @Description:非受控组件
 */
import React, { Component } from 'react'

class SimpleForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    // 通过this.input 获取到input 元素的值
    alert(`The title you submitted was ${this.input.value}`)
    event.prevenDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          title:
          {/* this.input 指向当前input元素*/}
          <input
            type="text"
            ref={input => (this.input = input)}
            defaultValue="something"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default SimpleForm
