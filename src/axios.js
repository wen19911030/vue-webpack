import Vue from 'vue';
import axios from 'axios';

// 加载进度设置
let requestingCount = 0;
const handleRequestLoading = () => {
  requestingCount++;
  if (!requestingCount) {
    store.commit('SHOW_LOADING');
  }
};
const handleResponseLoading = () => {
  requestingCount--;
  if (!requestingCount) {
    store.commit('CLOSE_LOADING');
  }
};
// 拦截器设置
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
