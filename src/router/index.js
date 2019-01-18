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
      next();
    } else {
      // router.replace('/login');
    }
  } else {
    next();
  }
});

export default router;
