
module.exports = {
  productionSourceMap: false, //不生成map
  runtimeCompiler:true, // 包含运行时编译器的 Vue 构建版
  devServer:{
    port:'80',
    proxy: {  //代理
      '/api': {
        target: 'http://localhost:80',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
