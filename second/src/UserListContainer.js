import React, { Component } from 'react'
import UserList from './UserList'
import UserDetail from './UserDetail'
import PropTypes from 'prop-types'
class UserListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [], currentUserId: null }
    this.handleAddUser = this.handleAddUser.bind(this)
    this.handleSetCurrentUser = this.handleSetCurrentUser.bind(this)
  }
  componentWillMount() {
    var that = this
    fetch(
      'http://rap2api.taobao.org/app/mock/21549/project-space/project-list'
    ).then(function(response) {
      response.json().then(function(data) {
        var arr = data.data.project_space
        // console.log(JSON.stringify(arr))
        that.setState({
          users: arr
        })
      })
    })
  }
  //   // 新增用户
  //   handleAddUser(user) {
  //     var that = this
  //     console.log(user)
  //     that.setState(preState => ({
  //       users: preState.users.concat([{ project_name: user }])
  //     }))
  //   }
  // 设置当前选中的用户
  handleSetCurrentUser(userId) {
    this.setState({
      currentUserId: userId
    })
  }
  //创建context对象， 包含onAddUser方法
  getChildContext() {
    return { onAddUser: this.handleAddUser }
  }
  //新增用户
  handleAddUser(user) {
    this.setState(preState => ({
        users: preState.users.concat([{ project_name: user }])
    }))
  }
  render() {
    // 根据currentUserId， 筛选出当前用户对象
    const filterUsers = this.state.users.filter(user => {
      return user.project_id === this.state.currentUserId
    })
    const currentUser = filterUsers.length > 0 ? filterUsers[0] : null
    return (
      <div>
        <UserList
          users={this.state.users}
          currentUserId={this.state.currentUserId}
          onAddUser={this.handleAddUser}
          onSetCurrentUser={this.handleSetCurrentUser}
        />
        <UserDetail currentUser={currentUser} />
      </div>
    )
  }
}
//声明context的属性的类型信息
UserListContainer.childContextTypes = {
  onAddUser: PropTypes.func
}
export default UserListContainer
