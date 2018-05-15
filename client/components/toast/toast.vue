<template>
	<transition name="fade" @after-leave="afterLeave()">
		<div id="toast" v-show="visiable">
			<div class="icon-wrap">
				<svg v-show="status === 'success'" class="icon icon-1-copy">
					<use xlink:href="#icon-1-copy"></use>
				</svg>
				<svg v-show="status === 'caution'"  class="icon icon-jinggao">
					<use xlink:href="#icon-jinggao"></use>
				</svg>
			</div>
			<p>{{content}}</p>
		</div>
	</transition>
</template>
<script>
	import './iconfont'
	export default {
		name: 'Toast',
		props:['content','status'],
		data() {
			return {
				visiable: true
			}
		},
		// props:['toastShow'],
		methods: {
			afterLeave(){
				this.$emit('closed')
			}
			
		}
	}
</script>
<style lang="stylus" scoped>
	#toast{
		position fixed
		top 50%
		left 50%
		transform: translate(-50%, -50%);
		padding: 20px 50px;
		background rgba(0,0,0,.7)
		text-align: center;
		.icon-wrap{
			.icon{
				fill #f1f3f5;
				width 40px;
				height 40px;
			}
		}
		p{
			color red
		}
	}
</style>