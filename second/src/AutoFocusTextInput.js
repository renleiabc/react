import React, { Component } from 'react'

class AutoFocusTextInput extends Component {
  constructor(props) {
    super(props)
    this.blur = this.blur.bind(this)
  }
  componentDidMount() {
    // 通过ref让input自动获取焦点
    this.textInput.focus()
    console.log(this.textInput.value)
  }
  // 让input失去焦点
  blur() {
    this.textInput.blur()
      console.log(this.textInput.value);
      let val = this.textInput.value;
      let data = {
          value:val
      }
      let str = JSON.stringify(data)
      let obj = encodeURIComponent(str)
      localStorage.setItem('data',obj)
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.textInput = input
          }}
          defaultValue="Hello"
        />
      </div>
    )
  }
}

export default AutoFocusTextInput
