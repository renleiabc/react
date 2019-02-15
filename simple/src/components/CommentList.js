import React, { Component } from 'react'
import CommentsView from './CommentsView'

import '../sass/CommentList.scss'
// 用于显示评论列表的组件
class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  //处理新评论内容的变化
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  //保存新评论
  handleClick(e) {
    const content = this.state.value
    if (content.length > 0) {
      this.props.onSubmit(this.state.value)
      this.setState({
        value: ''
      })
    } else {
      alert('评论内容不能为空！ ')
    }
  }
  render() {
    const { comments, editable } = this.props
    return (
      <div className="commentList">
        {/* 只有登录状态， 才允许新建评论 */}

        <div className="title">
                <div className="comments">评论</div>
          {editable ? (
            <div className="editor">
              <textarea
                placeholder="说说你的看法"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button onClick={this.handleClick}>提交</button>
            </div>
          ) : null}
          <CommentsView comments={comments} />
        </div>
      </div>
    )
  }
}
export default CommentList
