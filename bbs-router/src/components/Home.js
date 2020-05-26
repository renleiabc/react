/*
 * @Author: renlei
 * @Date: 2020-05-21 17:38:00
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-26 11:45:10
 * @Description:
 */

import React, { Component } from "react";
import { Route } from "react-router-dom";
import PostList from "./PostList";
import Header from "./Header";
import Post from "./Post";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: sessionStorage.getItem("userId"),
      username: sessionStorage.getItem("username"),
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    // 注销用户
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("username");
    this.setState({
      userId: null,
      username: null,
    });
  }

  render() {
    const { match, location } = this.props;
    const { userId, username } = this.state;
    console.log(match.url);
    return (
      <div>
        <Header
          username={username}
          onLogout={this.handleLogout}
          location={location}
        />
        <Route
          path={match.url}
          exact
          render={(props) => <PostList userId={userId} {...props} />}
        />
        <Route
          path={`${match.url}/:id`}
          render={(props) => <Post userId={userId} {...props} />}
        />
      </div>
    );
  }
}

export default Home;
