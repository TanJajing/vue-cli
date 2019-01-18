module.exports = {
  '/web-mall/new': {
    target: 'http://192.168.1.104:8082',
    changeOrigin: true,
    secure: false,
    pathRewrite: { 
      '^/web-mall/new': '/' //路径重写 
    }
  },
  '/web-mall/old': {
    target: 'http://www.hedongli.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: { 
      '^/web-mall/old': '/web-mall' //路径重写
    }
  }
};
