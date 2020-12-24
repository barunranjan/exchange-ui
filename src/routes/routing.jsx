import MApisPage from '../app/views/apis/ApisPage';

var ThemeRoutes = [
  { 
    path: '/apis', 
    name: 'APIS', 
    icon: 'ti-loop', 
    component: MApisPage 
  },

  { path: '/', pathTo: '/apis', name: 'APIS', redirect: true }
];
export default ThemeRoutes;
