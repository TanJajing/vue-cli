module.exports = {
  '/admin/new': {
    target: 'http://192.168.1.104:8082',
    changeOrigin: true,
    secure: false,
    pathRewrite: { 
      '^/admin/new': '/' //路径重写 
    }
  },
  '/admin/old': {
    target: 'http://www.hedongli.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: { 
      '^/admin/old': '/console' //路径重写
    }
  }
};
// http://localhost:8080/admin/old/login