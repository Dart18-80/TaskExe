import type { RouteRecordRaw } from "vue-router";

import AuthenticationLayout from '@/authentication/layout/AuthenticationLayout.vue';

import LoginPage from '@/authentication/pages/LoginPage.vue';
import RegisterPage from '@/authentication/pages/RegisterPage.vue';

const ROUTE_NAME = 'authentication';


export const authenticationRoute: RouteRecordRaw = {
    path: `/${ROUTE_NAME}`,
    redirect: `/${ROUTE_NAME}/login`,
    component: AuthenticationLayout,
    children: [
        {
            path: `/${ROUTE_NAME}/login`,
            name: 'loginPage',
            props: { title: 'Login', visible: true, },
            component: LoginPage
        },
        {
            path: `/${ROUTE_NAME}/register`,
            name: 'registerPage',
            props: { title: 'Register', visible: true, },
            component: RegisterPage
        }
    ]
}