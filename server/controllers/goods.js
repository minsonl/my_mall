const logger = require('../utils/log4js');
module.exports = {
	'GET /goods':async(ctx, next) => {
		ctx.response.body = `<h1>goods</h1>`
    	logger.res(ctx)
	},
	'GET /goods/list':async(ctx, next) => {
		ctx.response.body = `<h1>goods list</h1>`
    	logger.res(ctx)
	}
};