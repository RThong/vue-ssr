const Router = require('koa-router')
const axios = require('axios')
const path = require('path')
const fs = require('fs')
const MemoryFs = require('memory-fs')
const webpack = require('webpack')
const VueServerRenderer = require('vue-server-renderer')

const serverConfig = require('../../build/webpack.config.server')

const serverCompiler = webpack(serverConfig)
const mfs = new MemoryFs()

serverCompiler.outputFileSystem = mfs

let bundle
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
})

const handleSSR = async (ctx)=>{
	if(bundle){
		ctx.body = '等一会，别着急'
		return
	}
	//为返回给客户端添加html  和前端路由交互的js
	const clientManifestResp = await axios.get('http://127.0.0.1:8000/vue-ssr-clent-manifest.json')
	const clientManifest = createBundleRenderer.data

	const template = fs.readFileSync(path.join(__dirname, '../server.template.ejs'))

	const renderer = VueServerRenderer.createBundleRenderer(bundle, {
											inject: false,
											clientManifest
										})
}
