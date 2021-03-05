import { createRouter, createWebHashHistory } from 'vue-router';

import Home from "../features/home-page/Home.vue";
import AboutPage from "../features/about-page/about-page.vue";
import LinkDirectory from "../features/link-page/LinkDirectory.vue";
import EventsView from "../features/events-page/EventsView.vue";
import TestView from "../features/test-page/TestView.vue";
import SingleEventView from "../features/event-details/SingleEventView.vue";
import GradingInfo from "../features/grading-info-page/GradingInfo.vue";

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/useful-links",
      name: "useful-links",
      component: LinkDirectory,
    },
    {
      path: "/events",
      name: "events",
      component: EventsView,
    },
    {
      path: "/events/:id",
      name: "singleEvent",
      component: SingleEventView,
    },
    {
      path: "/tester",
      name: "tester",
      component: TestView,
    },
    {
      path: "/grading-info",
      name: "gradingInfo",
      component: GradingInfo,
    },
  ];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
