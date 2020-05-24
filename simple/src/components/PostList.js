/*
 * @Author: renlei
 * @Date: 2020-05-21 17:26:06
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-24 21:29:40
 * @Description:帖子列表组件
 */
import React, { Component } from "react";
import PostsView from "./PostsView";
import axios from "../utils/request";
import "../assets/less/postList.less";
import { Button } from "antd";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPost: false,
    };
  }
  componentDidMount() {
    this.handlePostList();
  }
  // 获取帖子列表
  async handlePostList() {
    const data = await axios.get("/cardLists");
    //console.log(JSON.stringify(data));
    this.setState({
      posts: data.data.postList,
      newPost: false,
    });
  }
  // 保存帖子
  handleSave(data) {
    // 当前
  }
  render() {
    const { userId } = this.props;
    return (
      <div className="postList">
        <div>
          <h2>帖子列表</h2>
          {/* 只有在登录状态下，才显示发帖按钮 */}
          {userId ? <Button>发帖</Button> : null}
        </div>
        {/* 若当前正在创建新的帖子，则渲染PostEdior组件 */}
        {/*  {this.state.newPost ? (
          <PostEditor />
        )} */}
        {/* PostsView显示帖子的列表数据 */}
        <PostsView posts={this.state.posts} />
      </div>
    );
  }
}
export default PostList;
