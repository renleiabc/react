/*
 * @Author: renlei
 * @Date: 2020-05-20 16:32:45
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-24 23:10:07
 * @Description:主界面
 */
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import PostDetails from "@/page/postDetails";
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
    console.log(match.url);
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
          render={(props) => <PostList userId={userId} {...props} />}
        />
        {/* 帖子详情路由配置 */}
        <Route
          path={`${match.url}/:id`}
          render={(props) => <PostDetails userId={userId} {...props} />}
        />
      </div>
    );
  }
}
export default Home;
