/*
 * @Author: renlei
 * @Date: 2020-05-21 17:26:06
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-21 18:26:44
 * @Description:帖子列表组件
 */
import React, { Component } from "react";

import PostsView from "./PostsView";
import axios from "../utils/request";
import "../assets/less/postList.less";

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
    const data = await axios.get("/postList");
    console.log(JSON.stringify(data));
  }
  render() {
    return (
      <div>
        <div>帖子列表界面</div>
      </div>
    );
  }
}
export default PostList;
