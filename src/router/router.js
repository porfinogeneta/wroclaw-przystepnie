import {createRouter, createWebHashHistory} from 'vue-router';
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
    history: createWebHashHistory()
})

export default router;
