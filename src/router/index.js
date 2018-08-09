import Vue from 'vue';
import Router from 'vue-router';

import Structures from './../components/structures/Structures';
import Layout from './../components/layouts/Layouts';
import Content from './../components/content/Content';

Vue.use(Router);

export let mainNavigationRoutes = [
  {
    path: '/structures',
    name: 'Structures',
    component: Structures
  },
  {
    path: '/layouts',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/content',
    name: 'Content',
    component: Content
  }
];

export default new Router({
  routes: [{
    path: '/',
    redirect: '/structures'
  },
    ...mainNavigationRoutes]
});
