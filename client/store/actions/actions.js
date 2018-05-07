//异步修改state
export default {
	updateCountAsync(context, time){
		setTimeout(()=>{
			context.commit('updateCount', 5)
		}, time)
	}
}