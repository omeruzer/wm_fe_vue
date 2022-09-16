import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'
import VueSweetalert2 from 'vue-sweetalert2';
Vue.config.productionTip = false
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import i18n from './i18n'
import VueBarcode from 'vue-barcode';
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSweetalert2);

var barcode = Vue.component('barcode',VueBarcode)

new Vue({
  el: '#app',
  i18n,
  router,
  axios,
  components: {
    barcode
  },
  store,
  render: h => h(App)
})