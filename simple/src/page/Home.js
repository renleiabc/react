/*
 * @Author: renlei
 * @Date: 2020-05-20 16:32:45
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-22 16:08:03
 * @Description:主界面
 */
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
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
    //注销用户
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("username");
    this.setState({
      userId: null,
      username: null,
    });
    const RedirectUrl = "/login";
    // 然后跳转到登录页面
    this.props.history.push(RedirectUrl);
  }
  render() {
    const { match, location } = this.props;
    const { userId, username } = this.state;
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
      </div>
    );
  }
}
export default Home;
