module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: '',
  devServer: {
    port: 8080, // 配置端口
    open: true, // 自动开启浏览器
    compress: true, // 开启压缩
    hotOnly: true // 热更新
    // 设置请求代理
    // proxy: {
    //   '/api': {
    //     target: '',
    //     ws: true, // 支持websocket
    //     changeOrigin: true
    //   }
    // }
  }
}
