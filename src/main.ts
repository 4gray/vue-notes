import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import { MdButton, MdField, MdCard } from 'vue-material/dist/components';

Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdCard);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
