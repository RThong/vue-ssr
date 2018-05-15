//将构建的html返回给客户端
const ejs = require('ejs')
module.exports = async (ctx, renderer, template) => {
	ctx.headers['Content-Type'] = 'text/html'
	
	const context = {url: ctx.path}
	try{
		console.log('---------------------------------before render')
		const appString = await renderer.renderToString(context)
console.log('---------------------------------after render')

		const html = ejs.render(template, {
			appString,
			style: context.renderStyles(),
			scripts: context.renderScripts()
		})

		ctx.body = html
	}catch(err){
		console.log('render error', err)
		throw err
	}
}