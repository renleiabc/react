/*
 * @Author: renlei
 * @Date: 2020-05-18 18:01:52
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-18 18:33:28
 * @Description: Next.js 的高级配置
 */
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  distDir: "build", //你可以自定义一个构建目录，如新建build文件夹来代替.next 文件夹成为构建目录。如果没有配置构建目录，构建时将会自动新建.next文件夹
  generateEtags: false, //你可以禁止 etag 生成根据你的缓存策略.如果没有配置，Next 将会生成 etags 到每个页面中。
  pageExtensions: ["jsx", "js"], //pageExtensions 允许你扩展后缀名来解析各种 pages 下的文件。
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    console.log(process.env.NODE_ENV);
    console.log(`dev:${dev}`, `isServer:${isServer}`);
    // 为 客户端打包 进行扩展配置
    if (dev) {
      config.devtool =
        process.env.NODE_ENV !== "production" ? "eval-source-map" : "none";
    }
    // 为 服务端打包 进行扩展配置
    if (isServer) {
      config.devtool =
        process.env.NODE_ENV !== "production" ? "eval-source-map" : "none";
    }
    console.log(config);
    // Perform customizations to webpack config
    // Important: return the modified config
    return config;
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true,
        },
      },
    }),
  ],
};
