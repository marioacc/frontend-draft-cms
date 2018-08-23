import Vue from 'vue';
import Router from 'vue-router';

import JobManagement from '../components/JobManagement/JobManagement';
import ContentManagement from '../components/ContentManagement/ContentManagement';

Vue.use(Router);

export let mainNavigationRoutes = [
    {
        path: '/job-management',
        name: 'Job Management',
        component: JobManagement
    },
    {
        path: '/content-management',
        name: 'Content Management',
        component: ContentManagement
    }
];

export default new Router({
    routes: [{
        path: '/',
        redirect: '/job-management'
    },
        ...mainNavigationRoutes]
});
