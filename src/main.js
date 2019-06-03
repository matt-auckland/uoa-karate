import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Image from './components/Image.vue';

Vue.config.productionTip = false;
Vue.component('vue-image', Image);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
