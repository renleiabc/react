# react
## react学习
#### 在create-react-app脚手架当中使用sass注意事项
##### 1、下载  
#### npm install node-sass sass-loader --save-dev  
##### 2、在开发阶段，找到项目的node_modules/react-scripts/config文件夹下找到webpack.config.js文件  
在webpack.config.js文件中，找到rule下的oneof在里面添加  
  //sass  
          {  
            test: /\.scss$/,  
            loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],  
          },  
这里style，css和sass这几个loader的功能都比较直观，我们知道"?sourceMap"这个语法的意思是开启对应模块的sourceMap属性，  
那么这个sourceMap又是干什么用的呢？
其实这里主要的目的就是方便我们调试sass代码。因为sass代码最终还是要编译成css的，而我们在调试的时候，  
我们更愿意在Chrome的开发者工具中能够直接看到我们的sass代码来进行调试。  
（注意：在使用npm run build打包上传之前，要把上述代码删除，否则会把css打包进js当中）  
##### 3、在打包之前删除webpack.config.js文件中  
devtool: isEnvProduction  
      ? shouldUseSourceMap  
        ? 'source-map'  
        : false  
      : isEnvDevelopment && 'cheap-module-source-map',  
      以便去除js当中的map文件；  