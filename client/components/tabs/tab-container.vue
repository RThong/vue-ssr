<script>
//tabs与tab是父子组件关系,点击事件先通过tab获取tab的index,然后通过$parent.onChange来执行tabs的
//emit,触发todo的change事件,todo的change事件来修改tabs的value    tab-->tabs-->todo
export default {
	props:{
		panes: {
			type: Array,
			required: true
		}
	},
	render(){
		const content = this.panes.map(pane => {
			return pane.active ? pane.$slots.default : null
		})
		return (
			<div class="tab-content">{content}</div>			
		)
	}
}
</script>