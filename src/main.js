import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAdAuzIBEpOmMeX_g8yRYwEoHOKpjX9qsQ",
    libraries: "places" // necessary for places input
  }
});


Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
