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
		this.timer = setTimeout(() => {
			this.visible = false
		}, this.closeTime)
	},
	computed: {
		bottom(){
			return `bottom:${this.verticalHeight}px`
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

	instance.$on('close', function(){
		this.visible = false
	})

	instance.$on('closed', function(){
		document.body.removeChild(this.$el)
		this.$destroy()
		instanceList.map((item, index) => {
			if(item.id === this.id)
				for(let i= 0;i<instanceList.length-index;i++){
					let tem = instanceList[index+i+1].verticalHeight
					instanceList[index+i+1].verticalHeight = instanceList[index+i].verticalHeight
				}
				
				instanceList.splice(index, 1)
		})
		clearTimeout(this.timer)
	})

	instance.id = id++

	instance.verticalHeight = 16 + 76*instanceList.length

	instanceList.push(instance)
}

export default init