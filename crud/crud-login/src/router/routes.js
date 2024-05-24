const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/login-usuario.vue') },
      { path: '/login', component: () => import('pages/login-usuario.vue') },
      { path: '/cadastro-dados', component: () => import('pages/cadastro-dados.vue') },
      { path: '/home-page', component: () => import('pages/home-page.vue') },

    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
