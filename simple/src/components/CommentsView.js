import React, { Component } from 'react'
import { getFormatDate } from '../utils/date'
import '../sass/CommentsView.scss'
// 用于显示评论内容的组件
class CommentList extends Component {
  render() {
    const { comments } = this.props
    console.log(comments)
    return (
      <ul className="commentsView">
        {comments.map(item => {
          console.log(item.author)

          return (
            <li key={item.id}>
              <div>{item.content}</div>
              <div className="sub">
                {item.author ? (
                  <span>{item.author.username}</span>
                ) : (
                  <span>匿名</span>
                )}
                <span>•</span>
                <span>{getFormatDate(item.updatedAt)}</span>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}
export default CommentList
