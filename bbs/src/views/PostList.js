/*
 * @Author: renlei
 * @Date: 2019-12-18 09:48:44
 * @LastEditors  : renlei
 * @LastEditTime : 2019-12-24 17:01:50
 * @Description: PostList组件，有状态组件
 */
import React, { Component } from 'react'
import PostItem from '../components/PostItem'
import '../less/PostList.less'
class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
    this.timer = null
    // ES6 class中，必须手动绑定方法this的指向；
    this.handleVote = this.handleVote.bind(this)
  }
  /* 这个方法在组件被挂载DOM后调用，且只调用一次。这个时候已经可以获取到DOM的结构，
  因此依赖DOM节点的操作可以放到这个方法中。这个方法通常还会用于向服务器端请求数据。
  在这个方法中调用this.setState会引起组件的重新渲染。 */
  componentDidMount() {
    //用setTimeout模拟异步从服务端获取数据
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: '大家一起讨论React吧',
            author: '张三',
            date: '2017-09-01 10:00',
            vote: 0
          },
          {
            id: 2,
            title: '前端框架，你最爱哪一个',
            author: '李四',
            date: '2017-09-01 12:00',
            vote: 0
          },
          {
            id: 3,
            title: 'web App的时代已经到来',
            author: '王五',
            date: '2017-09-01 14:00',
            vote: 0
          }
        ]
      })
    }, 1000)
  }
  /* 
  这个方法在组件被卸载前调用，可以在这里执行一些清理工作，比如清除组件中使用的定时器，
  清除componentDidMount中手动创建的DOM元素等，以避免引起内存泄漏。
   */
  componentWillUnmout() {
    if (this.timer) {
      //清除定时器
      clearTimeout(this.timer)
    }
  }
  handleVote(id) {
    //根据帖子id进行过滤，找到待修改vote属性的帖子，返回新的posts对象
    const posts = this.state.posts.map(item => {
      const newItem =
        item.id === id
          ? {
              ...item,
              vote: ++item.vote
            }
          : item
      return newItem
    })
    //使用新的posts对象设置state
    this.setState({
      posts
    })
  }
  render() {
    return (
      <div className="container">
        帖子列表：
        <div className="minor-borderTop major-fontColor">
        </div>
        <ul>
          {this.state.posts.map(item => (
            <PostItem key={item.id} post={item} onVote={this.handleVote} />
          ))}
        </ul>
      </div>
    )
  }
}
export default PostList;
