/*
 * @Author: renlei
 * @Date: 2019-12-20 11:18:42
 * @LastEditors  : renlei
 * @LastEditTime : 2019-12-20 11:37:16
 * @Description:
 */
import React, { Component } from 'react'
import './App.css'
import './styles/index.less'
import ColorSelect from './ColorSelect'
import { Steps, Button, Pagination } from 'antd'
const { Step } =Steps;
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '#000000',
      key: '#000000'
    }
    this.updateColor = this.updateColor.bind(this)
  }
  updateColor(key, color) {
    console.log(key, color);
    console.log({ key, color });
    this.setState = {key,color}
  }
  render() {
    let { color, key } = this.state
    console.log(color, key)
    return (
      <div className="App">
        <ColorSelect
          style={{ verticalAlign: 'middle' }}
          color={color} //编辑的时候，用于颜色的回显
          objKey={key} //因页面多次使用，传入key值，用于区分色块更新，因key是关键字，这里使用了objKey作为属性名                //传入父组件方法，更新颜色的拾取
          updateColor={this.updateColor}
        ></ColorSelect>

        <Steps size="small" current={1}>
          <Step title="Finished" />
          <Step title="In Progress" />
          <Step title="Waiting" />
        </Steps>
        <Pagination defaultCurrent={1} total={50} />
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    )
  }
}

export default App
