import React, { Component } from 'react'

class AutoFocusTextInput extends Component {
    constructor(props) {
        super(props);
        this.blur = this.blur.bind(this);
    }
    
    componentDidMount() {
    // 通过ref让input自动获取焦点
      this.textInput.focus()
      console.log(this.textInput.focus())
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.textInput = input
          }}
        />
      </div>
    )
  }
}

export default AutoFocusTextInput
