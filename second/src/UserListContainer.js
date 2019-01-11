import React, { Component } from 'react'
import UserList from './UserList'
class UserListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
  }
  componentWillMount() {
    var that = this
    fetch(
      'http://rap2api.taobao.org/app/mock/21549/project-space/project-list'
    ).then(function(response) {
      response.json().then(function(data) {
        var arr = data.data.project_space

        that.setState({
          users: arr
        })
      })
    })
  }
    render() {
       
    return <UserList users={this.state.users} />
  }
}

export default UserListContainer
