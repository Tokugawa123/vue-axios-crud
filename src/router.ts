//import { createHash } from 'crypto';
import { createWebHistory, createRouter} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: "/tutorials",
        component: () => import ("./components/TutorialsList.vue"),
    },
    {
        path: "/tutorials/:id",
        name: "tutorial-details",
        component: () => import ("./components/TutorialDetails.vue"),

    },
    {
        path: "/add",
        name: "add",
        component: () => import ("./components/AddTutorial.vue"),
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;