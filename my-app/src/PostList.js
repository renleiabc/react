import React, { Component } from 'react'
import PostItem from './PostItem'
import './PostList.css'
// 真实项目中， 帖子列表数据一般从服务器端获取
// 这里我们通过定义常量data存储列表数据

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
    this.timer = null //定时器
      this.handleVote = this.handleVote.bind(this); // ES6 class中，必须手动绑定方法this的指向；
      this.handleSave = this.handleSave.bind(this);
  }
  componentDidMount() {
    // 用setTimerout 模拟异步从服务器端获取数据
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: '大家一起来讨论React吧',
            author: '张三',
            date: '2017 - 09 - 01 10: 00',
            vote: 0
          },
          {
            id: 2,
            title: '前端框架， 你最爱哪一个',
            author: '李四',
            date: '2017 - 09 - 01 12: 00',
            vote: 0
          },
          {
            id: 3,
            title: 'Web App的时代已经到来',
            author: '王五',
            date: '2017 - 09 - 01 14: 00',
            vote: 0
          }
        ]
      })
    }, 1000)
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer) // 清除定时器
    }
  }
  handleVote(id) {
    //根据帖子id进行过滤， 找到待修改vote属性的帖子， 返回新的posts对象
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? { ...item, vote: ++item.vote } : item
      return newItem
    })
    // 使用新的posts对象设置state;
    this.setState({
      posts
    })
  }
  // 保存帖子
  handleSave(post) {
      console.log(this.state)
    // 根据post的id，过滤出当前要更新的post
    const data = this.state.posts.map(item => {
      const newItem = item.id === post.id ? post : item
      return newItem
    })
      console.log(data)
    this.setState({
        data
    })
  }

  render() {
    return (
      <div className="container">
        <h2 className="title-list">话题列表：</h2>
        <ul>
          {/*引用并渲染内容*/}
          {this.state.posts.map((item, index) => (
            <PostItem
              key={item.id}
              post={item}
              onVote={this.handleVote}
              onSave={this.handleSave}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default PostList
