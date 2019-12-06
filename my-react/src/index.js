/*
 * @Author: renlei
 * @Date: 2019-11-22 13:30:35
 * @LastEditors: renlei
 * @LastEditTime: 2019-12-06 15:51:21
 * @Description:
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './sass/style.scss';
// import App from './App';
import PostList from './PostList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<PostList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
