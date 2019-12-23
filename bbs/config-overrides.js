/*
 * @Author: renlei
 * @Date: 2019-12-23 10:44:41
 * @LastEditors  : renlei
 * @LastEditTime : 2019-12-23 11:22:25
 * @Description: 修改默认配置
 */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin
} = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const theme = require("./variable.js");
const rewiredMap = () => config => {
  // config为所有的webpack配置
  config.devtool =
    config.mode === 'development' ? 'cheap-module-source-map' : "none" // 生产环境关闭sourcemap关闭
  return config
}
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme
  }),
  rewiredMap(),
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
)
