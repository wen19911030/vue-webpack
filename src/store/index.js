import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    isLoading: false,
    theme: {
      backgroundColor: '#fff',
      textColor: '#303133',
      activeTextColor: '#282C34',
      headerTheme: 'info',
    },
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
    CHANGE_THEME(state, obj = {}) {
      Object.assign(state.theme, obj);
    },
  },
});

export default store;
