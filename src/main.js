import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/normalize.css';

createApp(App).use(router).mount('#main')
