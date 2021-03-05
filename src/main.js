import Vue, { createApp } from 'vue';
import App from './App.vue';
import router from './router';


import AppImage from './components/Image.vue';
import HeroImage from './components/HeroImage.vue';

Vue.component('app-image', AppImage);
Vue.component('hero-image', HeroImage);


createApp(App).use(router).mount('#app');
