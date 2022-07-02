import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login'
import Profile from "../views/Profile";
import Signup from "../views/Signup";
import Home from "../views/Home";
import EditProfil from "../views/editProfil";
import EditPassword from "../views/editPassword";


const routes = [

    {
        name: 'Login',
        path: '/',
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

    },
    {
        name: 'Home',
        path: '/home',
        component: Home,
    },
    {
        name: 'editProfil',
        path: '/editProfil',
        component: EditProfil,
    },
    {
        name: 'editPassword',
        path: '/editPassword',
        component: EditPassword,
    },

]

const router = createRouter( {
    history: createWebHistory(),
    routes
} )

export default router
