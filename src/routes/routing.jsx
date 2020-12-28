import MApisPage from '../app/views/apis/ApisPage';
import MExchangePage from '../app/views/Exchange/ExchangePage';

var ThemeRoutes = [
  { 
    path: '/apis', 
    name: 'APIS', 
    icon: 'ti-loop', 
    component: MApisPage 
  },
  { 
    path: '/exchange', 
    name: 'EXCHANGE', 
    icon: 'ti-loop', 
    component: MExchangePage 
  },

  { path: '/', pathTo: '/apis', name: 'APIS', redirect: true }
];
export default ThemeRoutes;
