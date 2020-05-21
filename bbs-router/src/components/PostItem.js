/*
 * @Author: renlei
 * @Date: 2020-05-21 17:38:00
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-21 17:47:58
 * @Description:
 */

import React from "react";
import { getFormatDate } from "../utils/date";
import "./PostItem.css";
import like from "../images/like.png";

function PostItem(props) {
  const { post } = props;
  return (
    <li className="postItem">
      <div className="title">{post.title}</div>
      <div>
        创建人：
        {post.author ? (
          <span>{post.author.username}</span>
        ) : (
          <span>renlei</span>
        )}
      </div>
      <div>
        更新时间：<span>{getFormatDate(post.updatedAt)}</span>
      </div>
      <div className="like">
        <span>
          <img alt="vote" src={like} />
        </span>
        <span>{post.vote}</span>
      </div>
    </li>
  );
}

export default PostItem;
