module.exports = {
	'GET /goods':async(ctx, next) => {
		ctx.response.body = `<h1>goods</h1>`
	},
	'GET /goods/list':async(ctx, next) => {
		ctx.response.body = `<h1>goods list</h1>`
	}
};