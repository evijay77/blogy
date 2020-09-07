import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'vue-nprogress'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "@/assets/css/main.sass";
import store from './store'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false
Vue.use(NProgress)
const nprogress = new NProgress()

new Vue({
  router,
  store,
  nprogress,
  render: h => h(App)
}).$mount('#app')
