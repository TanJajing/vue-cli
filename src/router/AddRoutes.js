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

const dynamicRoutes = [
  {
    path: '/',
    component: Container,
    children: [
      { path: '/home', component: Home, meta: { menuId: 1 } }
    ]
  }
];
class AddRoutes {
  constructor () {
    this.dynamicRoutes = dynamicRoutes[0].children;
    this.staticRoutes = staticRoutes;
  }

  addDynamicRoutes (list) {
    debugger;
    let newRoutes = [{
      path: '/',
      component: Container,
      children: []
    }];

    const routeArr = [];
    this.dynamicRoutes.map(val => {
      /* if (!val.meta || (val.meta && !val.meta.menuId)) {
        routeArr.push(val);
        return false;
      } */
      // list为已经扁平化具有menuId的路由
      console.log(list);
      list.map(cval => {
        routeArr.push(val);
        /* if (val.meta.menuId === cval) {
          // routeArr.push(val);
        // } */
      });
    });
    newRoutes[0].children = routeArr;
    this.getFirstPageRoute = newRoutes[0].children[0].path;
    return newRoutes;
  }
};
export default AddRoutes;
