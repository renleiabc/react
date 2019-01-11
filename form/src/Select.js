import React, { Component } from 'react'
// 下拉选择框组件
class ReactStackForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'mobx' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  handleSubmit(event) {
    alert('You picked ' + this.state.value)
    event.preventDefault()
  }
  render() {
    return <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Pick one library:
          {/* select的value属性定义当前哪个option元素处于选中状态</label>*/}
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="mobx">MobX</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
  }
}

export default ReactStackForm
