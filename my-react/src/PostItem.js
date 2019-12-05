/*
 * @Author: renlei
 * @Date: 2019-12-05 15:22:07
 * @LastEditors: renlei
 * @LastEditTime: 2019-12-05 18:02:31
 * @Description:
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


function PostItem(props) {
  const handleClick = () => {
    props.onVote(props.post.id);
  };
  const { post } = props;
  return (
    <li>
      <div>{post.title}</div>
      <div>
        创建人：
        <span>{post.atuhor}</span>
      </div>
      <div>
        创建时间：
        <span>{post.date}</span>
      </div>
      <div>
        <button onClick={handleClick}>点赞</button>
        &nbsp;
        <span>{post.vote}</span>
      </div>
    </li>
  );
}
PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    atuhor: PropTypes.string,
    vote: PropTypes.number,
  }).isRequired,
  onVote: PropTypes.func.isRequired,
};
export default PostItem;
