import Vue from 'vue'
//Import Vue Router
import VueRoter from 'vue-router'
//Import Vuetify
import Vuetify from 'vuetify'
//Import Vue-resource for HTTP requests
import VueResource from 'vue-resource'
//import App
import App from './App.vue'

//Import Routes for Configuration
import {routes} from "./routes.js";

//Using Vue-Router
Vue.use(VueRoter);

//Using Vue-Resource
Vue.use(VueResource);
//Using Vuetify
Vue.use(Vuetify);

//Routes config
const router = new VueRoter({
  //Removing # in URL's
  mode:'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
