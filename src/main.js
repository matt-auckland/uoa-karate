import { createApp } from 'vue';
import App from './App.vue'
import router from './router'

import AppImage from './components/Image.vue';
import HeroImage from './components/HeroImage.vue';

const app = createApp(App);


app.component('hero-image', HeroImage);
app.component('app-image', AppImage);

app.use(router).mount('#app')