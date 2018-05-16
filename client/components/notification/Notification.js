import Vue from 'vue'
import Notification from './notification.vue'

const NotificationConstructor = Vue.extend({
	extends: Notification,
	data(){
		return {
			verticalHeight: 0,
			timer: undefined
		}
	},
	mounted(){
		this.createTimer()
	},
	computed: {
		bottom(){
			return `bottom:${this.verticalHeight}px`
		}
	},
	methods: {
		createTimer(){
			this.timer = setTimeout(() => {
				this.visible = false
			}, this.closeTime)
		},
		clearTimer(){
			clearTimeout(this.timer)
		}
	}
})

let instanceList = []
let verticalHeight = 16
let id = 0


const init = (content, config) => {
	const instance = new NotificationConstructor({
		data(){
			return {
				closeTime: config.closeTime ? config.closeTime : 3000
			}
		},
		propsData: {
			content,
			btn: config.btn
		}
	}).$mount()
	document.body.appendChild(instance.$el)

	instance
	.$on('close', function(){
		this.visible = false
	})
	.$on('closed', function(){
		let targetIndex, targetHeight
		instanceList.map((item, index) => {
			console.log(item)
			if(item.id === this.id){
				targetIndex = index
				targetHeight = item.verticalHeight
				instanceList.splice(index, 1)
			}
		})

		for(let i = targetIndex;i < instanceList.length;i++){
			instanceList[i].verticalHeight -= 76
		}
		clearTimeout(this.timer)
		document.body.removeChild(this.$el)
		this.$destroy()
	})

	instance.id = id++

	instance.verticalHeight = 16 + 76*instanceList.length

	instanceList.push(instance)
}

export default init