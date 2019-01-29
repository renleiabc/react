import React, { Component } from 'react'
import withPersistentData from './withPersistentData'
class MyComponent extends Component {
    render() {
        return <div> {this.props.data.value}</div>
    }
}
const MyComponentWithPersistentData = withPersistentData(MyComponent)

export default MyComponentWithPersistentData
