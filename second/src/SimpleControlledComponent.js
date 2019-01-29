import React, { Component } from 'react'
import withControlledState from './withControlledState'
class SimpleControlledComponent extends Component{
    render() {
        //此时的SimpleControlledComponent为无状态组件， 状态由高阶组件维护
        return <input name="simple" {...this.props.controlledProps} />
    }
}
const ComponentWithControlledState = withControlledState(SimpleControlledComponent);
export default ComponentWithControlledState