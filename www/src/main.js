import Vue from 'vue'
import App from './App.vue'
import VIcon from 'vue-tailwind-icons';
import router from './router'
import store from './store'
import './assets/tailwind.css'



Vue.use(VIcon);
Vue.use(VIcon, { set: 'outline' });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
