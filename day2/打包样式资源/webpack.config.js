//
//resolve用来哦i你姐绝对路径的方法
const { resolve } = require('path');
module.exports = {
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    //  __dirname  nodejs的变量，代表当前文件的吗目录绝对路径
    path: resolve(__dirname, 'build')
  },
  //loader的配置
  module: {
    rules: [
      //详细配置
      {
        test: /\.css$/,
        use: [
          'style-loader',//创建style标签,将js中的样式资源插入进行，添加到head中生效
          'css-loader'//把css文件变成commonjs模块加在js中，里面内容是样式字符串
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',//要下载less-loader  less
        ]
      }
    ]
  },
  plugins: [

  ],
  //模式
  mode: 'development',
}
