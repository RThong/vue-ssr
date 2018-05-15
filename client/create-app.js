import Vue from 'vue'
import App from './app.vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(Router)
Vue.use(Vuex)

// router.beforeEach((to, from, next)=>{
// 	console.log('enter')
// 	next()
// })
export default ()=>{
	const router = createRouter()
	const store = createStore()

	const app = new Vue({
		router,
		store,
		render: (h) => h(App)
	})
	
	return {router, store, app}
}
