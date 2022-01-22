import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import VueAwesomeSwiper from 'vue-awesome-swiper';

// require styles
import 'swiper/css/swiper.css';

Vue.use(VueAwesomeSwiper /* { default global options } */);

import HomePage from './features/home-page/Home-Page.vue';
import AboutPage from './features/about-page/about-page.vue';
import LinkDirectory from './features/link-page/LinkDirectory.vue';
import EventsView from './features/events-page/EventsView.vue';
import TestView from './features/test-page/TestView.vue';
import SingleEventView from './features/event-details/SingleEventView.vue';
import GradingInfo from './features/grading-info-page/GradingInfo.vue';

Vue.use(Meta);
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/useful-links',
      name: 'useful-links',
      component: LinkDirectory,
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView,
    },
    {
      path: '/events/:id',
      name: 'singleEvent',
      component: SingleEventView,
    },
    {
      path: '/tester',
      name: 'tester',
      component: TestView,
    },
    {
      path: '/grading-info',
      name: 'gradingInfo',
      component: GradingInfo,
    },
  ],
});

router.afterEach(() => {
  // to and from are both route objects. must call `next`.
  window.goatcounter.count({
    path: location.pathname + location.search + location.hash,
  });
});

export default router;
