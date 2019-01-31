import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Post from './Post'
import PostList from './PostList'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: sessionStorage.getItem('userId'),
      username: sessionStorage.getItem('username')
    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    // 注销用户
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('username')
    this.setState({
      userId: null,
      username: null,
      redirectToReferrer: false
    })
  }
  render() {
    const { match, location } = this.props

    console.log(location)
    const { username, userId } = this.state
    return (
      <div>
        <Header
          username={username}
          onLogout={this.handleLogout}
          location={location}
        />
        {/* 帖子列表路由配置 */}
        <Route
          path={match.url}
          exact
          render={props => <PostList userId={userId} {...props} />}
        />
        {/* 帖子详情路由配置 */}
        <Route
          path={`${match.url}/:id`}
          render={props => <Post userId={userId} {...props} />}
        />
      </div>
    )
  }
}
export default Home
