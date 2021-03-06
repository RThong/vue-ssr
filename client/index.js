import Vue from 'vue'
import App from './app.vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

import Toast from './components/toast'
import Notification from './components/notification'
import Tabs from './components/tabs'

Vue.use(Router)
Vue.use(Vuex)
Vue.use(Toast)
Vue.use(Notification)
Vue.use(Tabs)

const router = createRouter()
const store = createStore()

// router.beforeEach((to, from, next)=>{
// 	console.log('enter')
// 	next()
// })
new Vue({
	el: '#root',
	router,
	store,
  render: (h) => h(App)
})