import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from "../views/Create";
import Edit from "../views/Edit";
import PageNotFound from "../views/PageNotFound";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: Edit,
    },
    {
        path: "*",
        name: 'PageNotFound',
        component: PageNotFound
    }
]

const router = new VueRouter({
    mode: '',
    base: process.env.BASE_URL,
    routes
})

export default router
