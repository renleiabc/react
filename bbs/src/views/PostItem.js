/*
 * @Author: renlei
 * @Date: 2020-01-03 11:54:35
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-03 11:58:28
 * @Description:
 */
import React, { Component } from 'react'
class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,//帖子是否处于编辑状态
      post:props.post
    }
    this.handleVote = this.handleVote.bind(this);
  }
}
export default PostItem
