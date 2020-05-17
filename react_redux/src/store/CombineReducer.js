/*
 * @Author: renlei
 * @Date: 2020-05-17 18:09:40
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-17 18:20:11
 * @Description:
 */
import { combineReducers } from "redux";
import count from "./Reducer";
import hello from "./Reducer2";
const rootReducer = combineReducers({
  count,
  hello,
});
export default rootReducer;
