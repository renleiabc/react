/*
 * @Author: renlei
 * @Date: 2019-12-18 10:12:20
 * @LastEditors  : renlei
 * @LastEditTime : 2019-12-19 16:31:35
 * @Description: 修改默认配置
 */
// import { devCss, devLess } from './dev'
// import {proCss,proLess} from './pro'
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin
} = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const rewiredMap = () => config => {
  // config为所有的webpack配置
  
  config.devtool =
    config.mode === 'development' ? 'cheap-module-source-map' : false;// 生产环境关闭sourcemap关闭
  // if (config.mode === 'development') {
  //   config.module.rules.push(devCss);
  //   config.module.rules.push(devLess);
  // } else {
  //   config.module.rules.push(proCss)
  //   config.module.rules.push(proLess)
  // }
  //console.log(config.module.rules)
  return config
}
module.exports = override(
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: true
  // }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {}
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  rewiredMap()
)
