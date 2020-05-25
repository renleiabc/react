import React from "react";
import { BrowserRouter } from "react-router-dom"; //引入哈希路由
import routerList from "./router/index"; //路由数据文件
import PrivateRoute from "./PrivateRoute"; //路由组件
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PrivateRoute routerList={routerList} />
      </BrowserRouter>
    </div>
  );
}
export default App;
