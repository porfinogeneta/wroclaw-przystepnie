import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/pages/Home";

const routes = [
    {path: '/', component: Home},
    {
        path: '/onas', name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
    },

]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
