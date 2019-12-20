/*
 * @Author: renlei
 * @Date: 2019-12-20 12:13:16
 * @LastEditors  : renlei
 * @LastEditTime : 2019-12-20 14:02:59
 * @Description:
 */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin
} = require('customize-cra')
//const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const path = require("path");
module.exports = override(
  fixBabelImports('import', {
  libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    //modifyVars: { '@primary-color': '#1DA57A' }
  }),
  addWebpackPlugin(
    new AntDesignThemePlugin({
      antDir: path.join(__dirname, './node_modules/antd'), //antd包位置
      stylesDir: path.join(__dirname, './src/styles'), //指定皮肤文件夹
      varFile: path.join(__dirname, './src/styles/variables.less'), //自己设置默认的主题色
      indexFileName: './public/index.html',
      mainLessFile: path.join(__dirname, './src/styles/index.less'),
      outputFilePath: path.join(__dirname, './public/color.less'), //输出到什么地方
      themeVariables: [
        //这里写要改变的主题变量
        '@primary-color',
        '@btn-primary-bg'
      ],
      generateOnce: false
    })
  )
)
