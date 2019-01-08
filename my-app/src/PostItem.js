// PostItem.js
import React from 'react'
import PropTypes from 'prop-types'
import './PostItem.css'
import like from './images/like-default.png'
function PostItem(props) {
  const handleClick = () => {
    props.onVote(props.post.id)
  }
  const { post } = props
  //   const style = {
  //     display: 'inline-block',
  //     height: '30px',
  //     color: 'red',
  //     fontSize: '20px'
  //   }
  return (
    <li className="item">
      <div className="title">{post.title}</div>
      <div>
        创建人：<span>{post.author}</span>
      </div>
      <div>
        创建时间：<span>{post.date}</span>
      </div>
      <div className="like">
        <span>
          <img src={like} onClick={handleClick} alt="图片" />
        </span>
        <span>{post.vote}</span>
      </div>
    </li>
  )
}
//PropTypes可以校验的组件属性
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
