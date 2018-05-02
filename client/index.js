import Vue from 'vue'
import App from './app.vue'
import Router from 'vue-router'

import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(Router)

const router = createRouter()

// router.beforeEach((to, from, next)=>{
// 	console.log('enter')
// 	next()
// })
new Vue({
	router,
  render: (h) => h(App)
}).$mount('#root')