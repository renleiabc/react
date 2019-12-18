/*
 * @Author: renlei
 * @Date: 2019-12-13 10:39:02
 * @LastEditors  : renlei
 * @LastEditTime : 2019-12-18 11:19:58
 * @Description:
 */
// module.exports = function override(config, env) {
//   // 使用webpack配置
//   console.log(config);
//   return config
// }
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin
} = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const rewiredMap = () => config => {
  // config为所有的webpack配置
  console.log(config.module);
  config.devtool =
    config.mode === 'development' ? 'cheap-module-source-map' : false // 生产环境关闭sourcemap关闭
  return config
}
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    librarDirectory: 'es',
    style: true,
    sourceMap: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
    sourceMap: true
  }),
  addWebpackPlugin(
    new AntdDayjsWebpackPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_console: true, //console
          drop_debugger: true
        }
      },
      sourceMap: false,
      parallel: true
    })
  ),
  rewiredMap()
)
