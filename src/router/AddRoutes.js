import Login from '@/views/login/Login.vue';
import Container from '@/views/Container.vue';
import Home from '@/views/home/home.vue';
const staticRoutes = [
  { path: '/login', component: Login, meta: { skipAuth: true } },
  {
    path: '/',
    component: Container,
    children: [
      { path: '/', redirect: '/home' }
    ]
  }
];
// 
const dynamicRoutes = [
  {
    path: '/',
    component: Container,
    children: [
      { path: '/home', component: Home, meta: { menuId: 1 } },
      { path: '/home1', component: Home, meta: { menuId: 2 } },
      { path: '/home2', component: Home, meta: { menuId: 5 } },
      { path: '/home4', component: Home, meta: { menuId: 9 } },
      { path: '/home5', component: Home, meta: { menuId: 8 } },
      { path: '/home6', component: Home, meta: { menuId: 6 } }
    ]
  }
];
class AddRoutes {
  constructor () {
    this.dynamicRoutes = dynamicRoutes[0].children;
    this.staticRoutes = staticRoutes;
  }

  addDynamicRoutes (list) {
    let newRoutes = [{
      path: '/',
      component: Container,
      children: []
    }];

    const routeArr = [];
    this.dynamicRoutes.map(val => {
      list.map(cval => {
        if (val.meta.menuId === cval) {
          routeArr.push(val);
        }
      });
    });
    newRoutes[0].children = routeArr;
    this.getFirstPageRoute = newRoutes[0].children[0].path;
    return newRoutes;
  }
};
export default AddRoutes;
