import React, { Component } from 'react'

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handeleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({ newUser: e.target.value });
    }
    //
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(function(user, index) {
            return <li key={index}>{user.project_name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default UserList
