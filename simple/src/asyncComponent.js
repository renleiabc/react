//代码分片
/*
当项目中使用React Router时， 一般会根据路由信息将项目代码分
片， 每个路由依赖的代码单独打包成一个chunk文件。 我们创建一个函
数统一处理这个逻辑：
*/
import React, { Component } from 'react'
// importComponent 是使用了import()的函数
function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null // 动态加载的组件
      }
    }
    componentDidMount() {
      importComponent().then(mod => {
        this.setState({
          // 同时兼容ES6和CommonJS的模块
          component: mod.default ? mod.default : mod
        })
      })
    }
    render() {
      // 渲染动态加载的组件
      const C = this.state.component
      return C ? <C {...this.props} /> : null
    }
  }
  return AsyncComponent
}
export default asyncComponent
