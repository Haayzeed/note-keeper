import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import firebase from 'firebase/app'
// import { getAuth, onAuthStateChanged } from "firebase/auth";

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

// let app;
// const auth = getAuth();
// firebase.auth().onAuthStateChanged(()=>{
//   if(!app){
//     app = new Vue({
//       router,
//       store,
//       render: h => h(App)
//     }).$mount('#app')
//   }
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
