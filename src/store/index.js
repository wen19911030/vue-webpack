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
  actions: {
    login({ commit }, user) {
      // 模拟登陆
      console.log(user);
      return new Promise((resolve, reject) => {
        user.id = 1;
        user.nickName = '管理员';
        sessionStorage.setItem('user', JSON.stringify(user));
        setTimeout(() => {
          resolve({ bool: true, user });
        }, 2000);
      });
    },
  },
});

export default store;
