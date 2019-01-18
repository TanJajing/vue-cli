import Vue from 'vue';
import Router from 'vue-router';
// import Cookies from 'js-cookie';
import routes from './AddRoutes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: routes
});

router.beforeEach((to, from, next) => {
  let isLogin = true;
  if (!to.meta.skipAuth) {
    if (isLogin) { // 验证是否已登录
      if (to.meta.content) {
        let head = document.getElementsByTagName('head');
        let meta = document.createElement('meta');
        meta.content = to.meta.content;
        head[0].appendChild(meta);
      }
      if (to.meta.title) {
        document.title = to.meta.title;
      }
      next();
    } else {
      // router.replace('/login');
    }
  } else {
    if (to.meta.content) {
      let head = document.getElementsByTagName('head');
      let meta = document.createElement('meta');
      meta.content = to.meta.content;
      head[0].appendChild(meta);
    }
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
  }
});

export default router;
