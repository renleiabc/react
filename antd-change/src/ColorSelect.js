/*
 * @Author: renlei
 * @Date: 2019-12-20 15:13:21
 * @LastEditors  : renlei
 * @LastEditTime : 2019-12-20 15:49:28
 * @Description:
 */
import { SketchPicker } from 'react-color'
let React = require('react')
export default class ColorSelect extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      color: props.color,
      key: props.objKey,
      displayColorPicker: 'none'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    let { displayColorPicker, key, color } = this.state
    console.log(key, color)
    displayColorPicker = displayColorPicker === 'none' ? 'block' : 'none'
    this.setState({ displayColorPicker })
    if (displayColorPicker) {
      this.props.updateColor(key, color)
    }
  }
  handleChange = value => {
    let color = value.hex
    console.log(value)
    let key = value.hex
    this.setState({ key, color })
    //更换主题颜色要这么写
    window.less
      .modifyVars({
        '@primary-color': color,
        '@btn-primary-bg': color
      })
      .then(() => {
        console.log('success')
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    let { color, displayColorPicker } = this.state
    return (
      <div className="react-color">
        <button
          onClick={this.handleClick}
          style={{
            background: color,
            border: 'none',
            lineHeight: '31px',
            height: 31,
            width: 45,
            verticalAlign: 'middle'
          }}
        ></button>{' '}
        {/*button色块样式*/}
        {displayColorPicker === 'block' ? (
          <div style={{ position: 'absolute', zIndex: 66 }}>
            {' '}
            {/*是选择器脱离标准流*/}
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    )
  }
}
