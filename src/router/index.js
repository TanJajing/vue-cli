import Vue from 'vue';
import Router from 'vue-router';
// import Cookies from 'js-cookie';
import store from '@/store';
import AddRoutes from './AddRoutes';

Vue.use(Router);

const router = new Router({
  routes: new AddRoutes().staticRoutes
});

router.beforeEach((to, from, next) => {
  if (!to.meta.skipAuth) {
    // this route requires auth, check if logged in,if not, redirect to login page.
    // let token = Cookies.get('loginToken');

    if (true) {
      if (false) {
        (async () => {
          await store.dispatch('getSystemInfo');
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
