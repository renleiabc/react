/*
 * @Author: renlei
 * @Date: 2020-05-22 19:50:03
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-24 21:44:55
 * @Description:
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";

class PostsView extends Component {
  render() {
    const { posts } = this.props;
    return (
      <ul>
        {posts.map((item, index) =>
          // 使用Link组件包裹每一个PostItem
          item.id ? (
            <Link key={index} to={`/posts/${item.id}`}>
              <PostItem post={item} />
            </Link>
          ) : (
            <Link key={index} to={`/posts/123`}>
              <PostItem post={item} />
            </Link>
          )
        )}
      </ul>
    );
  }
}

export default PostsView;
