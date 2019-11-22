/*
 * @Author: renlei
 * @Date: 2019-11-22 13:30:35
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-22 17:47:10
 * @Description: react的主页
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1>welcome to React</h1>
        <div
          id="content"
          className="foo"
          onClick={() => {
            console.log('Hello,React');
          }}
        >
          button
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          asdasd
        </a>
      </header>
    </div>
  );
}

export default App;
