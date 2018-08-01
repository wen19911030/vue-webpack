import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '',
      name: 'appview',
      component: () => import('../components/app-view.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../pages/home.vue'),
        },
        {
          path: '/test1',
          name: 'test1',
          component: () => import('../pages/test1.vue'),
        },
        {
          path: '/test2',
          name: 'test2',
          component: () => import('../pages/test2.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../pages/404.vue'),
    },
    {
      path: '/500',
      name: '500',
      component: () => import('../pages/500.vue'),
    },
  ],
});

const noVerify = ['404', 'login'];
router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log(to);
  // TODO 判断用户是否登录，未登录跳往登录界面
  const user = JSON.parse(sessionStorage.getItem('user')) || {};
  if (!user.id && noVerify.indexOf(to.name) < 0) {
    Vue.prototype.$message.warning('未授权，请登陆授权后继续');
    NProgress.done();
    return next({ name: 'login' });
  }

  return next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
