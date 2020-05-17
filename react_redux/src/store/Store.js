/*
 * @Author: renlei
 * @Date: 2020-05-17 16:09:06
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-17 18:21:00
 * @Description:
 */
import { createStore } from "redux";
import rootReducer from "./CombineReducer";
const store = createStore(rootReducer);
export default store;
