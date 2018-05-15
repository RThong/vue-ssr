import init from './Notification'

export default (Vue) => {
	// Vue.component(Notification.name, Notification)
	Vue.prototype.$notice = init
}