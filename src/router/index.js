import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';
import CategoriaView from '@/views/CategoriaView.vue';
import AcessorioView from '@/views/AcessorioView.vue';
import MarcaView from '@/views/MarcaView.vue';
import CorView from '@/views/CorView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: '/categoria',
          name: 'Categoria',
          component: CategoriaView
        },
        {
          path: '/acessorio',
          name: 'Acessorio',
          component: AcessorioView
        },
        {
          path: '/marca',
          name: 'Marca',
          component: MarcaView
        },
        {
          path: '/cor',
          name: 'Cor',
          component: CorView
        }
      ],
    },
  ],
});

export default router;
