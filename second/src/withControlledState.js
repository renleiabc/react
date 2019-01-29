import React, { Component } from 'react'

function withControlledState(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        value: 'sadads'
      }
      this.handleValueChange = this.handleValueChange.bind(this)
    }
    handleValueChange(event) {
      console.log(event.target.value)
      this.setState({
        value: event.target.value
      })
    }
    render() {
      // newProps 保存受控组件需要使用的属性和事件处理函数
      const newProps = {
        controlledProps: {
          value: this.state.value,
          onChange: this.handleValueChange
        }
      }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}
export default withControlledState
