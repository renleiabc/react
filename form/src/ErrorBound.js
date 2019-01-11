import React, { Component } from 'react'
/**
 * 错误处理
 */
const Profile = ({ user }) => <div>name: {user.name}</div>
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  componentDidCatch(error, info) {
    //显示错误UI
    this.setState({ hasError: true })
    //同事输出错误日志
    console.log(error, info)
  }
  render() {
    if (this.state.hasError) {
      return <h1>Oops, something went wrong.</h1>
    }
    return this.props.children
  }
}
class ErrorBound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: { name: 'react' }
    }
  }
  // 将user置为null， 模拟异常
    onClick = () => {
        this.setState({ user: null })
    };
    // onClick = () => {
    //     this.setState({
    //         user: {
    //         name:'JavaScript'
    //     } })
    // };
    render() {
        return <div>
            <ErrorBoundary>
              <Profile user={this.state.user} />
            </ErrorBoundary>
            <button onClick={this.onClick}>更新</button>
          </div>
    }
}

export default ErrorBound
