/*
 * @Author: renlei
 * @Date: 2019-12-18 09:48:44
 * @LastEditors  : renlei
 * @LastEditTime : 2019-12-19 16:30:07
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './less/index.less';
import App from './views/Layout';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
