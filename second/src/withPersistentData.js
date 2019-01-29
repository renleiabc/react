import React, { Component } from 'react'

function withPersistentData(WrappedComponent) {
  return class extends Component {
    componentWillMount() {
        let str = localStorage.getItem('data');
        let val = decodeURIComponent(str)
        let data = JSON.parse(val)
        console.log(data);
      this.setState({ data })
    }
    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

export default withPersistentData
