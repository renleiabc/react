/*
 * @Author: renlei
 * @Date: 2020-05-17 16:02:01
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-17 21:13:26
 * @Description:
 */
import * as ActionTypes from "./ActionType";
function handleReducer(state = 2, action) {
  // console.log(action.type);
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    case ActionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
export default handleReducer;
