/*
 * @Author: renlei
 * @Date: 2020-05-18 12:00:59
 * @LastEditors: renlei
 * @LastEditTime: 2020-05-21 15:31:44
 * @Description:
 */
const CracoLessPlugin = require("craco-less");
const path = require("path");
const variableStyle = require("./variableStyle");
// const CracoAntDesignPlugin = require("craco-antd");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = {
  style: {
    css: {
      loaderOptions: (cssLoaderOptions, { env, paths }) => {
        cssLoaderOptions.sourceMap = env === "development";
        //  console.log("key:", cssLoaderOptions);
        return cssLoaderOptions;
      },
    },
  },
  webpack: {
    // 别名
    alias: {
      "@": path.resolve("src"),
    },
    configure: (webpackConfig, { env, paths }) => {
      console.log(env);
      webpackConfig.devtool =
        env === "development" ? "cheap-module-source-map" : "none";
      // console.log("webpackConfig:", webpackConfig);
      return webpackConfig;
    },
  },
  /*  */
  devServer: {
    port: 9999, // 端口配置
    proxy: {
      "/api": {
        target: "http://rap2.taobao.org:38080/app/mock/254896/",
        ws: false, // websocket
        changeOrigin: true, //是否跨域
        secure: false, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  /* devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    console.log("devServerConfig:", devServerConfig);
    //devServerConfig.compress = false;
    //devServerConfig.publicPath = "";

    return devServerConfig;
  }, */
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: variableStyle,
          javascriptEnabled: true,
        },
      },
    },
  ],
};
