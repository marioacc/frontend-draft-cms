// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import store from './store';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faGrinBeamSweat} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faGrinBeamSweat);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuex);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    router,
    store,
    components: {App},
    render: h => h(App),
}).$mount('#app');