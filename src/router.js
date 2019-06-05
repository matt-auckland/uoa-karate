import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import Home from './features/home-page/Home.vue';
// new page
// import NewAboutPage from './features/about-page/about-page.vue';
import AboutPage from './views/About.vue';
import LinkDirectory from './features/link-page/LinkDirectory.vue';
import EventsView from './features/events-page/EventsView.vue';
import TestView from './features/test-page/TestView.vue';
import SingleEventView from './features/event-details/SingleEventView.vue';
import GradingInfo from './features/grading-info-page/GradingInfo.vue';

Vue.use(Meta);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
      path: '/events/:name',
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
