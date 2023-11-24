import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router/routers';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
