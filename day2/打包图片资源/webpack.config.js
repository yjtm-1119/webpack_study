const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,//这样做处理不了html中的img图片
        //下载url-loader file-loader  url-loader依赖于file-loader
        loader: 'url-loader',//默认使用es6module处理模块 
        options: {
          limit: 8 * 1024,//图片大小小于8kb  就会被base64处理
          //优点:减少请求数量(减轻服务器压力)
          //缺点:图片体积更大(文件请求速度更慢)
          //最好对8-12kb 图片进行base64处理
          //base64处理后的图片资源不会到build中  而是一个base64编码直接在页面显示
          //旧版本webpack需要添加  关闭esModule使用commonjs解析
          // esModule:false
          name: '[hash:10].[ext]'
          //[hash:10] 取图片的hash的前10位
          //[ext]取文件原来扩展名
        }
      },
      {
        test: /\.html$/,//专门负责处理html文件的img图片(负责引入img,从而能被url-loader进行处理)
        loader:'html-loader'//打包的位置引入的commonjs的引入    不能用es6module 去解析commonjs
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}