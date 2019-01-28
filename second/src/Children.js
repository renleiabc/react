//父组件访问子组件的DOM节点
import React from 'react'
function Children(props) {
  //子组件使用父组件传递的inputRef， 为input的ref赋值
  return (
    <div>
          <input ref={props.inputRef} />
    </div>
  )
}

export default Children
