/*
 * @Author: renlei
 * @Date: 2019-12-25 17:34:43
 * @LastEditors  : renlei
 * @LastEditTime : 2019-12-25 17:47:44
 * @Description: 列表操作组件
 */
import React, { Component } from "react";
class ReactStackForm extends Component{
  constructor(props) {
    super(props);
    this.state = { value: 'mobx' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //监听下拉列表的变化
  
  render() {
    return (<form>
      <label htmlFor=""></label>
    </form>)
  }
}
export default ReactStackForm;