import { createRouter, createWebHashHistory } from 'vue-router';

// import Meta from 'vue-meta';
// Vue.use(Meta);

const routes = [
  {
    path: '/',
    name: 'home',
    component: import('./features/home-page/Home-Page.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: import('./features/about-page/about-page.vue'),
  },
  {
    path: '/useful-links',
    name: 'useful-links',
    component: import('./features/link-page/LinkDirectory.vue'),
  },
  {
    path: '/events',
    name: 'events',
    component: import('./features/events-page/EventsView.vue'),
  },
  {
    path: '/events/:id',
    name: 'singleEvent',
    component: import('./features/event-details/SingleEventView.vue'
    ),
  },
  {
    path: '/tester',
    name: 'tester',
    component: import('./features/test-page/TestView.vue'),
  },
  {
    path: '/grading-info',
    name: 'gradingInfo',
    component: import('./features/grading-info-page/GradingInfo.vue'),
  },
  {
    path: '/auckland-north',
    name: 'aucklandNorth',
    component: import('./features/auckland-north/Auckland-North.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach(() => {
  // to and from are both route objects. must call `next`.
  window.goatcounter.count({
    path: location.pathname + location.search + location.hash,
  });
});

export default router;
