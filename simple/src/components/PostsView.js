/*
 * @Author: renlei
 * @Date: 2020-05-21 18:07:43
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-24 22:50:20
 * @Description:负责展示
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";
class PostView extends Component {
  render() {
    const { posts } = this.props;
    return (
      <ul>
        {posts.map((item, index) => (
          <Link
            key={index}
            to={{
              pathname: `/postDetails/${item.id}`,
              name: "PostDetails",
              params: { id: item.id },
            }}
          >
            <PostItem post={item} />
          </Link>
        ))}
      </ul>
    );
  }
}
export default PostView;
