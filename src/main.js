import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router/routers';
import funcPlugins from './plugins/func';
import objPlugins from './plugins/obj';
import person from './plugins/person';
import { createApp } from 'vue';
import App from './App.vue';
import globalComponents from './plugins/global-components';

const app = createApp(App);
app.use(globalComponents); //주석해도 잘나옴왜 ??? 플러그인이 자동으로 import시켜줌
app.use(funcPlugins); //플러그인 등록
app.use(objPlugins, { name: '짐코딩' }); // 플러그인 등록
app.use(person, { name: '홍길동' });
app.use(router); // 플러그인 등록
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// console.log('MODE', import.meta.env.MODE);
// console.log('BASE_URL', import.meta.env.BASE_URL);
// console.log('PROD', import.meta.env.PROD);
// console.log('DEV', import.meta.env.DEV);
// console.log('VITE_APP_API_URL', import.meta.env.VITE_APP_API_URL);
