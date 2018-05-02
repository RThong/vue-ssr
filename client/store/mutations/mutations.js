//外部通过触发mutation中的函数更新state中的数值
export default {
	updateCount(state, num){
		state.count = num
	},
	updateName(state, name){
		state.lastName = name
	}
}