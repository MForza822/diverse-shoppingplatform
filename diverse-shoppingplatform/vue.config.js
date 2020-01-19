module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: '',
  indexPath: '',
  devServer: {
    port: 8080, // 配置端口
    open: true, // 自动开启浏览器
    compress: true, // 开启压缩
    // 设置让浏览器 overlay 同时显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    // 设置请求代理
    proxy: {
      '/api': {
        target: '',
        ws: true,
        changeOrigin: true
      }
    }
  }
}