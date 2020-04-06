import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import PostPage from './components/PostPage.vue';
import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/posts', name: 'home',component: Home},
  { path: '/posts/:post_Id', 
    name:'post', 
    component: PostPage,
    props: true
  },
  {
    path: '/posts?category'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
