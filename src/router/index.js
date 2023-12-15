import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/buscar-material',
      name: 'buscar-material',
      component: () => import('../views/BuscarMaterialView.vue')
    },
    {
      path: '/calculadora',
      name: 'calculadora',
      component: () => import('../views/calculadora.vue')
    },
    {
      path: '/ajustes',
      name: 'ajustes',
      component: () => import('../views/ajustes.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/chat.vue')
    }
  ]
})

export default router
