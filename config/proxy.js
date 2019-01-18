module.exports = {
  '/mobile': {
    target: 'http://www.hedongli.com',
    changeOrigin: true,
    pathRewrite: {
      '^/mobile': 'mobile'
    }
  },
  '/new-mobile': {
    target: 'http://news.baidu.com',
    changeOrigin: true,
    pathRewrite: {
      '^/new-mobile': 'guonei'
    }
  }
}
