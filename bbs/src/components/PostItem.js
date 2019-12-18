/*
 * @Author: renlei
 * @Date: 2019-12-18 14:58:24
 * @LastEditors: renlei
 * @LastEditTime: 2019-12-18 16:45:32
 * @Description: PostItem组件，无状态组件
 */
import React from 'react'
import PropTypes from 'prop-types'
import "../less/PostItem.less"
function PostItem(props) {
  const handleClick = () => {
    props.onVote(props.post.id)
  }
  const { post } = props
  return (
    <li className="item">
      <div className="title">{post.title}</div>
      <div>
        创建人：<span>{post.author}</span>
      </div>
      <div>
        创建时间：<span>{post.date}</span>
      </div>
      <div>
        <button onClick={handleClick}>点赞</button>
        &nbsp;
        <span>{post.vote}</span>
      </div>
    </li>
  );
}
//属性校验
PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    vote: PropTypes.number
  }).isRequired,
  onVote: PropTypes.func.isRequired
}
export default PostItem
