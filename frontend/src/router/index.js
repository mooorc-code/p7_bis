import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login'
import Profile from "@/views/Profile";
import Signup from "@/views/Signup";

const routes = [
  {
    name: 'Login',
    path: '/',
    component: Login,
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
  {
    name: 'Signup',
    path: '/signup',
    component: Signup,
  },
  {
    name: 'Profile',
    path: '/profile',
    component: Profile,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
