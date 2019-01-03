module.exports = {
  '/web-mall/*': {
    // target: 'http://www.hedongli.com',
    // target: 'http://172.16.68.134:8084',
    target: 'http://www.hedongli.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: { 
              '^/web-mall': '' //路径重写 
            }
  }
};
