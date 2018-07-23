import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    isLoading: false,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    SHOW_LOADING(state) {
      state.isLoading = true;
    },
    CLOSE_LOADING(state) {
      state.isLoading = false;
    },
  },
});

export default store;
