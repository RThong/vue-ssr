import Vue from 'vue'
import Toast from './toast.vue'

let hasCreated= false //控制toast只能存在一个
const ToastConstructor = Vue.extend({
	extends: Toast,
	// data(){
	// 	return {
	// 		hasCreated: false
	// 	}
	// },
	mounted(){
		this.autoClose()
	},
	beforeDestroy(){
		this.clearTimer()
	},
	methods: {
		autoClose(){
			if(this.closeTime){
				this.timer = setTimeout(() => {
					this.visiable = false
				}, this.closeTime)
			}
		},
		clearTimer(){
			if(this.timer){
				console.log('qingchuchenggong')
				clearTimeout(this.timer)
			}
		}
	}
})

const init = (content, options) => {
	if(hasCreated) return
	const instance = new ToastConstructor({
		data(){
			return {
				closeTime: options.closeTime? options.closeTime : 3000
			}
		},
		propsData: {
			content,
			...options
		}
	}).$mount()
	hasCreated = true
	document.body.appendChild(instance.$el)

	instance.$on('closed', () => {
		document.body.removeChild(instance.$el)
		instance.$destroy()
		hasCreated = false
	})
	
}

export default init