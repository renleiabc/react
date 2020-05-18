/*
 * @Author: renlei
 * @Date: 2020-05-18 12:00:59
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-18 15:29:47
 * @Description:
 */
const CracoLessPlugin = require("craco-less");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = {
  webpack: {
    plugins: [new BundleAnalyzerPlugin()],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: { "@primary-color": "#1DA57A" },
          javascriptEnabled: true,
        },
        sourceMap: true,
      },
    },
  ],
};
