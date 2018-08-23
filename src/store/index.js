import Vue from 'vue';
import Vuex from 'vuex';
import jobCreation from './modules/job-creation';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        jobCreation
    },
    strict: debug
});