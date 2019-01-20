module.exports = {
  '/console': {
    target: 'http://www.hedongli.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: { 
      '^/console/': 'console' //路径重写
    }
  },
  '/new-console': {
    target: 'http://192.168.1.101:8082',
    changeOrigin: true,
    secure: false,
    pathRewrite: { 
      '^/new-console': '' //路径重写 
    }
  }
};