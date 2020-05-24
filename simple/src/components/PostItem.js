/*
 * @Author: renlei
 * @Date: 2020-05-23 19:46:45
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-24 10:12:00
 * @Description:渲染帖子列表的每一项，它不负责任何业务逻辑，只关心组件的渲染，因而可以使用一个无状态的函数组件实现
 */
import React from "react";
import "../assets/less/postItem.less";
import like from "../assets/images/like.png";
function postItem(props) {
  const { post } = props;
  return (
    <li className="postItem">
      <div className="title">{post.title}</div>
      <div>
        创建人：<span>{post.author.username}</span>
      </div>
      <div>
        更新时间：<span>{post.updatedAt}</span>
      </div>
      <div className="like">
        <span>
          <img src={like} alt="vote" />
        </span>
        <span>{post.vote}</span>
      </div>
    </li>
  );
}
export default postItem;
