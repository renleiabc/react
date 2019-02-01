import React from 'react'
import { getFormatDate } from '../utils/date'
import like from '../images/like.png'
/**
 * PostItem组件用于渲染帖子列表的每一项， 它不负责任何业务逻
辑， 只关注组件的渲染， 我们使用一个无状态的函数组件实现
PostItem。 components/PostItem.js的代码如下：
 */
function PostItem(props) {
  const { post } = props
  return <li className="postItem">
      <div className="title">{post.title}</div>
      <div>
        创建人：<span>{post.author.username}</span>
      </div>
      <div>
        更新时间：<span>{getFormatDate(post.updatedAt)}</span>
      </div>
      <div className="like">
        <span>
          <img alt="vote" src={like} />
          </span>
          <span>
              {post.vote}
          </span>
      </div>
    </li>
}

export default PostItem
