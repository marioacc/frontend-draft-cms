import Vue from 'vue';
import Vuex from 'vuex';
import jobCreation from './modules/job-creation-steps';
import jobManager from './modules/job-manager';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        jobCreation,
        jobManager
    },
    strict: debug
});