import Router from 'vue-router'
import routes from './routes'

//服务端渲染需要
export default ()=>{
	return new Router({
		routes,
		mode: 'history'
	})
}