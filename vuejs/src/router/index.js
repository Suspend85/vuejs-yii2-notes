import { createRouter, createWebHistory } from 'vue-router'

import AuthLayout from '@/layouts/AuthLayout';
import DefaultLayout from '@/layouts/DefaultLayout';

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView';
import RegisterView from '@/views/RegisterView';


const routes = [
  {
    path: '/',
    name: 'Default',
    redirect: '/home',
    component: DefaultLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginView
      },
      {
        path: 'register',
        name: 'register',
        component: RegisterView
      }
    ]
  },
  {
    path: '/login',
    redirect: '/auth/login'
  },
  {
    path: '/register',
    redirect: '/auth/register'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
