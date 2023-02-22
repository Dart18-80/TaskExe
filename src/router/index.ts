import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/shared/pages/HomePage.vue';

//Authentication Path
import { authenticationRoute } from '@/authentication/router/index';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Principal Page
    { path: '/', name: 'home', component: HomePage },
    
    //Authentication Page
    authenticationRoute,

    //Default
    { path: '/:pathMatch(.*)*', redirect: () => ({name: 'home'})}
  ]
})

export default router
