//过滤state中的数据
export default {
	fullName(state, num){
		return `${state.firstName} ${state.lastName}`
	}
}