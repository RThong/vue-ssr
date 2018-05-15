import init from './Toast'
export default (Vue) => {
	// Vue.component(Toast.name, Toast)
	Vue.prototype.$toast = init
}