/*
 * @Author: renlei
 * @Date: 2020-01-03 11:54:35
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-09 14:00:55
 * @Description:支持帖子的标题编辑功能组件
 */
import React, { Component } from 'react'
import like from '../images/like-default.png'
import '../less/PostItem.less'
import { Button, Input } from 'antd'
const { TextArea } = Input
class PostItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false, //帖子是否处于编辑状态
      post: props.post
    }
    this.handleVote = this.handleVote.bind(this)
    this.handleEditPost = this.handleEditPost.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    // 父组件更新post后，更新PostItem的state
    if (this.props.post !== nextProps.post) {
      this.setState({
        post: nextProps.post
      })
    }
  }
  //处理点赞事件
  handleVote() {
    this.props.onVote(this.props.post.id)
  }

  // 保存/编辑按钮点击后的逻辑
  handleEditPost() {
    const editing = this.state.editing
    // 当前处于编辑态，调用父组件传递的onSave方法保存帖子
    if (editing) {
      this.props.onSave({
        ...this.state.post,
        date: this.getFormatDate()
      })
    }
    this.setState({
      editing: !editing
    })
  }
  // 处理标题textarea值的变化
  handleTitleChange(event) {
    const newPost = { ...this.state.post, title: event.target.value }
    this.setState({
      post: newPost
    })
  }
  // 显示日期格式化
  getFormatDate() {
    const date = new Date()
    const year = date.getFullYear()
    let month = date.getMonth() + 1 + ''
    month = month.length === 1 ? '0' + month : month
    let day = date.getDate() + ''
    day = day.length === 1 ? '0' + day : day
    let hour = date.getHours() + ''
    hour = hour.length === 1 ? '0' + hour : hour
    let minute = date.getMinutes() + ''
    minute = minute.length === 1 ? '0' + minute : minute
    return `${year}-${month}-${day} ${hour}:${minute}`
  }
  render() {
    const { post } = this.state
    return (
      <li className="item">
        <div className="title">
          {this.state.editing ? (
            <form>
              <TextArea
                value={post.title}
                onChange={this.handleTitleChange}
                rows={2}
              />
            </form>
          ) : (
            post.title
          )}
        </div>
        <div>
          创建人：<span>{post.author}</span>
        </div>
        <div>
          创建时间：<span>{post.date}</span>
        </div>
        <div className="like">
          <span>
            <img src={like} alt="vote" onClick={this.handleVote} />
          </span>
          <span>{post.vote}</span>
        </div>
        <div>
          <Button type="primary" onClick={this.handleEditPost}>
            {this.state.editing ? '保存' : '编辑'}
          </Button>
        </div>
      </li>
    )
  }
}
export default PostItem
