// import qs from 'qs';
import request from './http/index.js';

const development = 'http://localhost:3618';
// const development = '/web-mall';
const API = (url, method) => params => request(development + url, params, method || 'post');
/* const download = url => params => {
  // console.log(`${qs.stringify(params, {arrayFormat: 'brackets'})}`);
  window.location.href = `${url}?${qs.stringify(params, { arrayFormat: 'brackets' })}`;
};
const upload = (url, method) => params => {
  let formData = jsonToFormData(params);
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };
  return request(development + url, formData, 'post', config);
}; */

export default {
  /* 公共 */
  getUserRoleAPI: API('/permissions'),
  loginApi: API('/log'),
  getDataAPI: API('/user/nologin/loadCatLog')
};
