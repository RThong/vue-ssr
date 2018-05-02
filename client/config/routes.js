// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
	{
		path: '/',
		redirect: '/app'
	},
	{
		// path: '/app/:id',
		path: '/app',
		component: () => {
			return import('../views/todo/todo.vue')
		},
		meta: {
			title: 'this is app',
			description: 'adsafsf'
		}
	},
	{
		path: '/login',
		component: () => {
			return import('../views/login/login.vue')
		}
	}
]