const getGoods = require('../models/getGoodsType.js');
module.exports = {
	'GET /':async(ctx, next) => {
		const start = new Date();
		console.log(start)
		let datas = await getGoods.getGoodsType('SELECT * FROM goods_type');
		let datas2 = await getGoods.getGoodsType('SELECT * FROM goods');
		await ctx.render('home', {datas,datas2})
	}
};