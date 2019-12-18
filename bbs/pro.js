/*
 * @Author: renlei
 * @Date: 2019-12-18 11:27:22
 * @LastEditors: renlei
 * @LastEditTime: 2019-12-18 11:46:39
 * @Description:
 */
exports.proCss = {
  test: /\.css$/,
  use: ['css-loader']
}
exports.proLess = {
  test: /\.less/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader'
    },
    {
      loader: 'less-loader'
    }
  ]
}
