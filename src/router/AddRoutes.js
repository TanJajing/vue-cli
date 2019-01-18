import Login from '@/views/login/Login.vue';
import Iframe from '@/views/iFrame/Iframe.vue';
import Container from '@/views/Container.vue';
import Page404 from '@/views/common/Page404.vue';
import Home from '@/views/home/Home.vue';
import BookMeeting from '@/views/bookMeeting/BookMeeting.vue';
import RushBuying from '@/views/rushBuying/RushBuying.vue';
import Auction from '@/views/auction/Auction.vue';
import CombineSales from '@/views/combineSales/CombineSales.vue';
import Dibao from '@/views/dibao/Dibao.vue';
import NFD from '@/views/nfd/NFD.vue';
import OperateMcht from '@/views/operateMcht/OperateMcht.vue';
import ItemDetail from '@/views/itemDetail/ItemDetail.vue';
import ItemInfo from '@/views/itemInfo/ItemInfo.vue';
const routes = [
  { path: '/login', component: Login, meta: { skipAuth: true } },
  { path: '/toVA', component: Iframe },
  {
    path: '/',
    component: Container,
    children: [
      { path: '/home', component: Home },
      { path: '/bookMeeting', component: BookMeeting },
      { path: '/rushBuying', component: RushBuying },
      { path: '/auction', component: Auction },
      { path: '/combineSales', component: CombineSales },
      { path: '/dibao', component: Dibao },
      { path: '/nfd', component: NFD },
      { path: '/operateMcht', component: OperateMcht },
      { path: '/itemDetail', name: 'itemDetail', component: ItemDetail },
      { path: '/itemInfo', component: ItemInfo },
      { path: '*', component: Page404 }
    ]
  }
];
export default routes;
