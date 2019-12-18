/*
 * @Author: renlei
 * @Date: 2019-12-18 11:27:22
 * @LastEditors: renlei
 * @LastEditTime: 2019-12-18 11:45:40
 * @Description:
 */
exports.devCss = {
  test: /\.css$/,
  use: [
    'css-loader?sourceMap!autoprefixer-loader'
  ]
}
exports.devLess = {
  test: /\.less/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader?sourceMap'
    },
    {
      loader: 'less-loader?sourceMap'
    }
  ]
}
