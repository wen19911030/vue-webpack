import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import HelloWorld from '@/components/HelloWorld';

// const Foo = () => import('./Foo.vue');
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
          component: () => import('../pages/home.vue'),
        },
      ],
    },
    {
      path: '/404',
      component: () => import('../pages/404.vue'),
    },
    {
      path: '/500',
      component: () => import('../pages/500.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  // TODO 判断用户是否登录，未登录跳往登录界面

  return next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
