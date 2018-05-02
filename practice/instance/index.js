import Vue from 'vue'


const component = {
  name: 'comp',
  props: ['props1'],
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  },
  render(h){
  	return h('div',{
  		style: this.style,
  		on: {
  			click: ()=>{
  				console.log('11')
  				// console.log('clicked')
  				this.$emit('click')
  			}
  		}
  	}, [
	  	this.$slots.default,
	  	this.props1
  	])
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  methods: {
  	handerClick(){
  		console.log('22')
  	}
  },
  mounted () {
    // console.log(this.$refs.comp.value, this.$refs.span)
      },
  // template: `
  //   <comp-one ref="comp">
  //     <span ref="span">{{value}}</span>
  //   </comp-one>
  // `,
  render(h){
  	return h('comp-one',{
  		ref: 'comp',
  		props: {
  			props1: this.value,
  			
  		},
  		on: {
  			click: this.handerClick
  		}
  	}, [
	  	h('span', {
	  		ref: 'span',
	  	},this.value)
  	])
  }
})
