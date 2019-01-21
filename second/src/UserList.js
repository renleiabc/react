import React, { Component } from 'react'
import UserAdd from './UserAdd'
class UserList extends Component {
  // 通过props 调用父组件的方法， 设置当前选中的用户
  handleUserClick(userId) {
    this.props.onSetCurrentUser(userId)
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user, index) => {
            return (
              <li
                key={index}
                className={
                  this.props.currentUserId === user.project_id ? 'current' : ''
                }
                onClick={this.handleUserClick.bind(this, user.project_id)}
              >
                {user.project_name}
              </li>
            )
          })}
        </ul>
        {/* 传递UserListContainer的handleAddUser方法 */}
        <UserAdd onAddUser={this.props.onAddUser} />
      </div>
    )
  }
}

export default UserList
