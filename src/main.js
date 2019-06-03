import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue'
import Routes from './routes'


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, value) {
      state.count= state.count+value
    },
  },
  actions: {
    increment (context, value) {
      context.commit('increment', value)
    }
  }
})

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  mixins:[],
  render: h => h(App),
  router: router,
  store,
}).$mount("#app")
