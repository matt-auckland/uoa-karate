import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './features/home-page/Home-Page.vue';
import AboutPage from './features/about-page/about-page.vue'
import LinkDirectory from './features/link-page/LinkDirectory.vue'
import EventsView from './features/events-page/EventsView.vue'
import SingleEventView from './features/event-details/SingleEventView.vue'
import TestView from './features/test-page/TestView.vue'
import GradingInfo from './features/grading-info-page/GradingInfo.vue'
import AucklandNorth from './features/auckland-north/Auckland-North.vue'

// () => import Meta from 'vue-meta';
// Vue.use(Meta);

const routes = [
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
    component: SingleEventView
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
  {
    path: '/auckland-north',
    name: 'aucklandNorth',
    component: AucklandNorth,
  },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
});

router.afterEach(() => {
  // to and from are both route objects. must call `next`.
  window.goatcounter.count({
    path: location.pathname + location.search + location.hash,
  });
});

export default router;
