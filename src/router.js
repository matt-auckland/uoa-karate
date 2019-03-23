import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import LinkDirectory from './views/LinkDirectory.vue'
import EventsView from './views/EventsView.vue'
import TestView from './views/TestView.vue'
import SingleEventView from './views/SingleEventView.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/useful-links',
      name: 'useful-links',
      component: LinkDirectory
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/events/:name',
      name: 'singleEvent',
      component: SingleEventView
    },
    {
      path: '/tester',
      name: 'tester',
      component: TestView
    },
  ]
})
