<script>
	import TabContainer from './tab-container.vue'
//tabs与tab是父子组件关系,点击事件先通过tab获取tab的index,然后通过$parent.onChange来执行tabs的
//emit,触发todo的change事件,todo的change事件来修改tabs的value    tab-->tabs-->todo
//通过tab-container传入props来监听tab内容插槽的状态变化
export default {
	name: 'Tabs',
	props: {
		//用于确定tab的index，通过判断value相等
		value: {
			type: [Number, String],
			required: true
		}		
	},
	components:{
		TabContainer
	},
	data(){
		return {
			panes: []
		}
	},
	methods: {
		onChange(index){
			this.$emit('change', index)
		}
	},
	render(){
		return (
			<div class="tabs">
				<ul class="tabs-header">
					{this.$slots.default}
				</ul>
				<tab-container panes={this.panes}></tab-container>	
			</div>
		)
	}
}
</script>
<style lang="stylus" scoped>
.tabs-header
  display flex
  list-style none
  margin 0
  padding 0
  border-bottom 2px solid #ededed
</style>