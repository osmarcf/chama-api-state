import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import ChamadaAPI from '../views/ChamadaAPI.vue';
import Contatos from '../views/Contatos.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/chamada',
    name: 'ChamadaAPI',
    component: ChamadaAPI
  },
  {
    path: '/contatos',
    name: 'Contatos',
    component: Contatos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
