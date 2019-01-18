// import qs from 'qs';
import request from './http/index.js';

// const development = 'http://localhost:3618';
// const path = '/new-mobile';
const API = (url, method) => params => request(url, params, method || 'post');

export default {
  /* 公共 */
 };
