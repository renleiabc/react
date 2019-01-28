import React, { Component } from 'react'

import Children from './Children'
class Parent extends Component {
    constructor(props) {
        super(props)
        console.log(this.inputElement)
    }
    componentDidMount() {
        console.log(this.inputElement)
    }
  render() {
    // 自定义一个属性inputRef， 值是一个函数
      return <Children inputRef={el => (this.inputElement = el)} />
  }
}
export default Parent
