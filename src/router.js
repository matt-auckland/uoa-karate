import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './features/home-page/HomePage.vue';
import AboutPage from './features/about-page/AboutPage.vue'
import LinkDirectory from './features/link-page/LinkDirectory.vue'
import EventsView from './features/events-page/EventsView.vue'
import EventDetailView from './features/event-details/EventDetailView.vue'
import QuizPage from './features/quiz-page/QuizPage.vue'
import GradingInfo from './features/grading-info-page/GradingInfo.vue'
import AucklandNorth from './features/auckland-north/AucklandNorth.vue'

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
    component: EventDetailView
  },
  {
    path: '/tester',
    name: 'tester',
    component: QuizPage,
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
