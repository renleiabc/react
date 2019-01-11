import React, { Component } from 'react'

class Time extends Component {
  constructor(props) {
    super(props)
    this.timer = null // 普通属性
    this.state = {
      date: new Date(),
      books: ['js', 'react', 'vue', 'jquery']
    }
    this.updateDate = this.updateDate.bind(this)
  }
  componentDidMount() {
    this.timer = setInterval(this.updateDate, 1000)
    // 更新书本
      this.upBooks();
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  updateDate() {
    this.setState(preState => ({
      date: new Date()
    }))
  }
  // 更新书本函数
  upBooks() {
    this.setState(preState => ({
      books: [...preState.books, 'HTML']
    }))
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h1>{this.state.date.toString()}</h1>
        <ul>
          {this.state.books.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}
export default Time
