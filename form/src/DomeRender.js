import React, { Component } from 'react'

class ListComponent extends Component {
  render() {
    return [
      <li key="A">First item</li>,
      <li key="B">Second item</li>,
      <li key="C">Third item</li>
    ]
  }
}

class StringComponent extends Component {
  render() {
    return 'Just a strings'
  }
}

class DomeRender extends Component {
  render() {
    return [
      <ul key="1">
        <ListComponent />
      </ul>,
      <StringComponent key="2" />
    ]
  }
}
export default DomeRender
