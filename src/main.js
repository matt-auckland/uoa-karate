import Vue from 'vue';
import App from './App.vue';
import router from './router';


import AppImage from './components/Image.vue';

Vue.config.productionTip = false;
Vue.component('app-image', AppImage);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
