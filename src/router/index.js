import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/Pages/HomePage.vue';
import Register from '../components/Pages/Register.vue';
import Login from '../components/Pages/Login.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
