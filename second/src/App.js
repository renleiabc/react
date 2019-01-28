import React, { Component } from 'react'
import Time from './Time'
import './App.css'
import UserListContainer from './UserListContainer'
import Container from './Container'
import Parent from './Parent'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'renlei',
      display: true
    }
  }
  render() {
    return <div className="App">
        {this.state.display ? <h1>Hello,{this.state.user}</h1> : null}
        <Time />
        <UserListContainer />
        <Container />
        <Parent/>
      </div>
  }
}

export default App
