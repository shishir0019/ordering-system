import { createRouter, createWebHashHistory } from 'vue-router';

const layout = (name) => () => import(`../Layouts/${name}.vue`);
const page = (name) => () => import(`../Pages/${name}.vue`);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: layout('Default'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: page('Dashboard'),
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: layout('404') },
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated()) next({ name: 'Login' })
//   else next()
//   // console.log(isAuthenticated());
// })

// const isAuthenticated = () => {
//   return store.getters['user'];
// }

// router.beforeEach((to, from, next) => {
//   let isAdmin = to.meta.requireAdmin;
//   let adminToken = localStorage.adminToken;
//   if (isAdmin && !adminToken) {
//     next({ path: '/auth/login' });
//   } else {
//     next();
//   }
// })
export default router;