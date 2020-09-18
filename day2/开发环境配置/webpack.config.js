// 开发环境配置，让代码能运行即可
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      //loader的配置
      {
        //处理less资源
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        //处理css资源
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        //处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',//url-loader只能处理样式中的图片资源 不能处理html中的图片资源处理不了
        options: {
          limit: 8 * 1024,//转化为base64
          name: '[hash:10].[ext]',
          esModule: false,
        }
      },
      {
        //处理html中img资源
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        //处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
  }
}