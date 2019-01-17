import Vue from 'vue';
import Router from 'vue-router';
// import Cookies from 'js-cookie';
import store from '@/store';
import AddRoutes from './AddRoutes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: new AddRoutes().staticRoutes
});

router.beforeEach((to, from, next) => {
  if (!to.meta.skipAuth) {
    // this route requires auth, check if logged in,if not, redirect to login page.
    // let token = Cookies.get('loginToken');

    if (true) { // 是否拦截登录
      if (true) { // 判断是否有sessionID，是否需要重新获取路由
        (async () => {
          await store.dispatch('getMenuList');
          // replace重新获取route对象
          await next({ ...to, replace: true });
        })();
      } else {
        next();
      }
    } else {
      // store.dispatch('toLoginPage');
      router.replace('/login');
    }
  } else {
    next();
  }
});

export default router;
