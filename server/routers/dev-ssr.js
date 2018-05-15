const Router = require('koa-router')
const axios = require('axios')
const path = require('path')
const fs = require('fs')
const MemoryFs = require('memory-fs')
const webpack = require('webpack')
const VueServerRenderer = require('vue-server-renderer')

const serverRender = require('./server-render')
const serverConfig = require('../../build/webpack.config.server')

const serverCompiler = webpack(serverConfig)
const mfs = new MemoryFs()

serverCompiler.outputFileSystem = mfs

let bundle
//node开启webpack打包
serverCompiler.watch({}, (err, stats)=>{
	//打包错误
	if(err){
		throw err
	}
	stats = stats.toJson()
	//非打包错误
	stats.errors.forEach(err => console.log(err))
	stats.warnings.forEach(warn => console.warn(warn))

	//bundle路径
	const bundlePath = path.join(serverConfig.output.path, 'vue-ssr-server-bundle.json')
	//读取bundle
	bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
	console.log('new bundle generated')
})

const handleSSR = async (ctx)=>{
	if(!bundle){
		ctx.body = '等一会，别着急'
		return
	}
	//为返回给客户端添加html  和前端路由交互的js
	const clientManifestResp = await axios.get('http://127.0.0.1:8000/public/vue-ssr-client-manifest.json')
	const clientManifest = clientManifestResp.data

	//读取template模板
	const template = fs.readFileSync(path.join(__dirname, '../server.template.ejs'), 'utf-8')

	const renderer = VueServerRenderer.createBundleRenderer(bundle, {
											inject: false,
											clientManifest
										})
	
	await serverRender(ctx, renderer, template)
}

//koa-router路由匹配
const router = new Router()
router.get('*', handleSSR)

module.exports = router
