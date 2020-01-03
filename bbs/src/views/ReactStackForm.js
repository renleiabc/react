/*
 * @Author: renlei
 * @Date: 2019-12-25 17:34:43
 * @LastEditors  : renlei
 * @LastEditTime : 2019-12-26 17:55:12
 * @Description: 列表操作组件
 */
import React, { Component } from 'react'
import { Select, Button } from 'antd'
const { Option } = Select
class ReactStackForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'mobx' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  //监听下拉列表的变化
  handleChange(value) {
    this.setState({ value })
  }
  // 表单提交的响应函数
  handleSubmit(event) {
    console.log(`You picked ${this.state.value}`)
    event.preventDefault()
  }
  render() {
    return (
      <form>
        <label>
          Pick one library:
          {/*select的value属性定义当前那个option元素处于选中状态 */}
          <Select
            defaultValue={this.state.value}
            onChange={this.handleChange}
            style={{ width: 120 }}
          >
            <Option value="react">react</Option>
            <Option value="redux">redux</Option>
            <Option value="mobx">mobx</Option>
          </Select>
        </label>
        <Button type="primary" onClick={this.handleSubmit}>
          点击
        </Button>
      </form>
    )
  }
}
export default ReactStackForm
