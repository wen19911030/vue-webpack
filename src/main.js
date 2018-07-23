// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store/index';

let requestingCount = 0;
const handleRequestLoading = () => {
  if (!requestingCount) store.commit('SHOW_LOADING');
  requestingCount++;
};
const handleResponseLoading = () => {
  requestingCount--;
  if (!requestingCount) store.commit('CLOSE_LOADING');
};

Vue.use(Vuex);

axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    handleRequestLoading();
    return config;
  },
  error => {
    // Do something with request error
    handleResponseLoading();
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    // Do something with response data
    handleResponseLoading();
    return response;
  },
  error => {
    // Do something with response error
    handleResponseLoading();
    return Promise.reject(error);
  }
);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />',
});
