import axios from 'axios';
// import router from '../../router/index.js';
import store from '../../store/index.js';

export default (url, params, method, config) => {
  // 去掉首尾空格
  // 当异步事件通过async，await阻塞发生时，loading会在第一次后失效
  // 原因，后续SHOW_PAGE_LOADING并没有触发视图的变更，采用再按钮上加v-loading.fullscreen.lock，再创建一个loading实例
  store.commit('SHOW_PAGE_LOADING');
  return new Promise((resolve, reject) => {
    let ajx;
    if (method === 'get') {
      ajx = axios.get(url, params, config);
    } else if (method === 'delete') {
      ajx = axios.delete(url, params, config);
    } else if (method === 'put') {
      ajx = axios.put(url, params, config);
    } else {
      ajx = axios.post(url, params, config);
    }
    ajx.then(res => {
      if (String(res.status) === '200') {
        // if (Number(2050) > res.errorInfo.code > Number(2001)) {
        // router.replace('/login');
        // }
        resolve(res.data);
      } else {
        // 防止防止多次执行Message，需要加一个全局message的状态
        console.log('___log' + res.data.msg);
        reject(res.data);
      }
      // 处理完事件后，再关闭加载图标
      store.commit('HIDE_PAGE_LOADING');
    }).catch((err) => {
      store.commit('HIDE_PAGE_LOADING');
      reject(err);
      // 出现400+，500+错误
      // errorHandle(err);
    });
  });
};

// 错误码处理