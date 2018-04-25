const getGoods = require('../models/getGoodsType.js');
const logger = require('../utils/log4js');
module.exports = {
	'GET /':async(ctx, next) => {
		const start = new Date();
		let datas = await getGoods.getGoodsType('SELECT * FROM goods_type');
		let datas2 = await getGoods.getGoodsType('SELECT * FROM goods');
		await ctx.render('home', {datas,datas2})
		const ms = new Date() - start
    	logger.res(ctx, ms)
	}
};